import * as passport from "passport";
import * as passportJWT from "passport-jwt";
import { prisma } from "../prisma/client";

const JwtStrategy = passportJWT.Strategy;
const ExtractJwt = passportJWT.ExtractJwt;

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

export default function passport_verify(passport: passport.PassportStatic) {
  passport.use(
    new JwtStrategy(opts, async (jwt_payload, done) => {
      const user = await prisma.users.findUnique({
        where: {
          id: jwt_payload.id,
        },
      });

      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    })
  );
}
