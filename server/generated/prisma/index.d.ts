
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model calendars
 * 
 */
export type calendars = $Result.DefaultSelection<Prisma.$calendarsPayload>
/**
 * Model events
 * 
 */
export type events = $Result.DefaultSelection<Prisma.$eventsPayload>
/**
 * Model sync_tokens
 * 
 */
export type sync_tokens = $Result.DefaultSelection<Prisma.$sync_tokensPayload>
/**
 * Model job_offers
 * 
 */
export type job_offers = $Result.DefaultSelection<Prisma.$job_offersPayload>
/**
 * Model job_applications
 * 
 */
export type job_applications = $Result.DefaultSelection<Prisma.$job_applicationsPayload>
/**
 * Model jobs
 * 
 */
export type jobs = $Result.DefaultSelection<Prisma.$jobsPayload>
/**
 * Model calendar_tokens
 * 
 */
export type calendar_tokens = $Result.DefaultSelection<Prisma.$calendar_tokensPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.calendars`: Exposes CRUD operations for the **calendars** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Calendars
    * const calendars = await prisma.calendars.findMany()
    * ```
    */
  get calendars(): Prisma.calendarsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.events`: Exposes CRUD operations for the **events** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.events.findMany()
    * ```
    */
  get events(): Prisma.eventsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sync_tokens`: Exposes CRUD operations for the **sync_tokens** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sync_tokens
    * const sync_tokens = await prisma.sync_tokens.findMany()
    * ```
    */
  get sync_tokens(): Prisma.sync_tokensDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.job_offers`: Exposes CRUD operations for the **job_offers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Job_offers
    * const job_offers = await prisma.job_offers.findMany()
    * ```
    */
  get job_offers(): Prisma.job_offersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.job_applications`: Exposes CRUD operations for the **job_applications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Job_applications
    * const job_applications = await prisma.job_applications.findMany()
    * ```
    */
  get job_applications(): Prisma.job_applicationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jobs`: Exposes CRUD operations for the **jobs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jobs
    * const jobs = await prisma.jobs.findMany()
    * ```
    */
  get jobs(): Prisma.jobsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.calendar_tokens`: Exposes CRUD operations for the **calendar_tokens** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Calendar_tokens
    * const calendar_tokens = await prisma.calendar_tokens.findMany()
    * ```
    */
  get calendar_tokens(): Prisma.calendar_tokensDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    users: 'users',
    calendars: 'calendars',
    events: 'events',
    sync_tokens: 'sync_tokens',
    job_offers: 'job_offers',
    job_applications: 'job_applications',
    jobs: 'jobs',
    calendar_tokens: 'calendar_tokens'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "calendars" | "events" | "sync_tokens" | "job_offers" | "job_applications" | "jobs" | "calendar_tokens"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      calendars: {
        payload: Prisma.$calendarsPayload<ExtArgs>
        fields: Prisma.calendarsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.calendarsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calendarsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.calendarsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calendarsPayload>
          }
          findFirst: {
            args: Prisma.calendarsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calendarsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.calendarsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calendarsPayload>
          }
          findMany: {
            args: Prisma.calendarsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calendarsPayload>[]
          }
          create: {
            args: Prisma.calendarsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calendarsPayload>
          }
          createMany: {
            args: Prisma.calendarsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.calendarsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calendarsPayload>[]
          }
          delete: {
            args: Prisma.calendarsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calendarsPayload>
          }
          update: {
            args: Prisma.calendarsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calendarsPayload>
          }
          deleteMany: {
            args: Prisma.calendarsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.calendarsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.calendarsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calendarsPayload>[]
          }
          upsert: {
            args: Prisma.calendarsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calendarsPayload>
          }
          aggregate: {
            args: Prisma.CalendarsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCalendars>
          }
          groupBy: {
            args: Prisma.calendarsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CalendarsGroupByOutputType>[]
          }
          count: {
            args: Prisma.calendarsCountArgs<ExtArgs>
            result: $Utils.Optional<CalendarsCountAggregateOutputType> | number
          }
        }
      }
      events: {
        payload: Prisma.$eventsPayload<ExtArgs>
        fields: Prisma.eventsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.eventsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.eventsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          findFirst: {
            args: Prisma.eventsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.eventsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          findMany: {
            args: Prisma.eventsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>[]
          }
          create: {
            args: Prisma.eventsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          createMany: {
            args: Prisma.eventsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.eventsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>[]
          }
          delete: {
            args: Prisma.eventsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          update: {
            args: Prisma.eventsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          deleteMany: {
            args: Prisma.eventsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.eventsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.eventsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>[]
          }
          upsert: {
            args: Prisma.eventsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          aggregate: {
            args: Prisma.EventsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvents>
          }
          groupBy: {
            args: Prisma.eventsGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventsGroupByOutputType>[]
          }
          count: {
            args: Prisma.eventsCountArgs<ExtArgs>
            result: $Utils.Optional<EventsCountAggregateOutputType> | number
          }
        }
      }
      sync_tokens: {
        payload: Prisma.$sync_tokensPayload<ExtArgs>
        fields: Prisma.sync_tokensFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sync_tokensFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sync_tokensPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sync_tokensFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sync_tokensPayload>
          }
          findFirst: {
            args: Prisma.sync_tokensFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sync_tokensPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sync_tokensFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sync_tokensPayload>
          }
          findMany: {
            args: Prisma.sync_tokensFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sync_tokensPayload>[]
          }
          create: {
            args: Prisma.sync_tokensCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sync_tokensPayload>
          }
          createMany: {
            args: Prisma.sync_tokensCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.sync_tokensCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sync_tokensPayload>[]
          }
          delete: {
            args: Prisma.sync_tokensDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sync_tokensPayload>
          }
          update: {
            args: Prisma.sync_tokensUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sync_tokensPayload>
          }
          deleteMany: {
            args: Prisma.sync_tokensDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sync_tokensUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.sync_tokensUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sync_tokensPayload>[]
          }
          upsert: {
            args: Prisma.sync_tokensUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sync_tokensPayload>
          }
          aggregate: {
            args: Prisma.Sync_tokensAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSync_tokens>
          }
          groupBy: {
            args: Prisma.sync_tokensGroupByArgs<ExtArgs>
            result: $Utils.Optional<Sync_tokensGroupByOutputType>[]
          }
          count: {
            args: Prisma.sync_tokensCountArgs<ExtArgs>
            result: $Utils.Optional<Sync_tokensCountAggregateOutputType> | number
          }
        }
      }
      job_offers: {
        payload: Prisma.$job_offersPayload<ExtArgs>
        fields: Prisma.job_offersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.job_offersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_offersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.job_offersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_offersPayload>
          }
          findFirst: {
            args: Prisma.job_offersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_offersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.job_offersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_offersPayload>
          }
          findMany: {
            args: Prisma.job_offersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_offersPayload>[]
          }
          create: {
            args: Prisma.job_offersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_offersPayload>
          }
          createMany: {
            args: Prisma.job_offersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.job_offersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_offersPayload>[]
          }
          delete: {
            args: Prisma.job_offersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_offersPayload>
          }
          update: {
            args: Prisma.job_offersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_offersPayload>
          }
          deleteMany: {
            args: Prisma.job_offersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.job_offersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.job_offersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_offersPayload>[]
          }
          upsert: {
            args: Prisma.job_offersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_offersPayload>
          }
          aggregate: {
            args: Prisma.Job_offersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJob_offers>
          }
          groupBy: {
            args: Prisma.job_offersGroupByArgs<ExtArgs>
            result: $Utils.Optional<Job_offersGroupByOutputType>[]
          }
          count: {
            args: Prisma.job_offersCountArgs<ExtArgs>
            result: $Utils.Optional<Job_offersCountAggregateOutputType> | number
          }
        }
      }
      job_applications: {
        payload: Prisma.$job_applicationsPayload<ExtArgs>
        fields: Prisma.job_applicationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.job_applicationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_applicationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.job_applicationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_applicationsPayload>
          }
          findFirst: {
            args: Prisma.job_applicationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_applicationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.job_applicationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_applicationsPayload>
          }
          findMany: {
            args: Prisma.job_applicationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_applicationsPayload>[]
          }
          create: {
            args: Prisma.job_applicationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_applicationsPayload>
          }
          createMany: {
            args: Prisma.job_applicationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.job_applicationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_applicationsPayload>[]
          }
          delete: {
            args: Prisma.job_applicationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_applicationsPayload>
          }
          update: {
            args: Prisma.job_applicationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_applicationsPayload>
          }
          deleteMany: {
            args: Prisma.job_applicationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.job_applicationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.job_applicationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_applicationsPayload>[]
          }
          upsert: {
            args: Prisma.job_applicationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_applicationsPayload>
          }
          aggregate: {
            args: Prisma.Job_applicationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJob_applications>
          }
          groupBy: {
            args: Prisma.job_applicationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Job_applicationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.job_applicationsCountArgs<ExtArgs>
            result: $Utils.Optional<Job_applicationsCountAggregateOutputType> | number
          }
        }
      }
      jobs: {
        payload: Prisma.$jobsPayload<ExtArgs>
        fields: Prisma.jobsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.jobsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.jobsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>
          }
          findFirst: {
            args: Prisma.jobsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.jobsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>
          }
          findMany: {
            args: Prisma.jobsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>[]
          }
          create: {
            args: Prisma.jobsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>
          }
          createMany: {
            args: Prisma.jobsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.jobsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>[]
          }
          delete: {
            args: Prisma.jobsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>
          }
          update: {
            args: Prisma.jobsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>
          }
          deleteMany: {
            args: Prisma.jobsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.jobsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.jobsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>[]
          }
          upsert: {
            args: Prisma.jobsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>
          }
          aggregate: {
            args: Prisma.JobsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobs>
          }
          groupBy: {
            args: Prisma.jobsGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobsGroupByOutputType>[]
          }
          count: {
            args: Prisma.jobsCountArgs<ExtArgs>
            result: $Utils.Optional<JobsCountAggregateOutputType> | number
          }
        }
      }
      calendar_tokens: {
        payload: Prisma.$calendar_tokensPayload<ExtArgs>
        fields: Prisma.calendar_tokensFieldRefs
        operations: {
          findUnique: {
            args: Prisma.calendar_tokensFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calendar_tokensPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.calendar_tokensFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calendar_tokensPayload>
          }
          findFirst: {
            args: Prisma.calendar_tokensFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calendar_tokensPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.calendar_tokensFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calendar_tokensPayload>
          }
          findMany: {
            args: Prisma.calendar_tokensFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calendar_tokensPayload>[]
          }
          create: {
            args: Prisma.calendar_tokensCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calendar_tokensPayload>
          }
          createMany: {
            args: Prisma.calendar_tokensCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.calendar_tokensCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calendar_tokensPayload>[]
          }
          delete: {
            args: Prisma.calendar_tokensDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calendar_tokensPayload>
          }
          update: {
            args: Prisma.calendar_tokensUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calendar_tokensPayload>
          }
          deleteMany: {
            args: Prisma.calendar_tokensDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.calendar_tokensUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.calendar_tokensUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calendar_tokensPayload>[]
          }
          upsert: {
            args: Prisma.calendar_tokensUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calendar_tokensPayload>
          }
          aggregate: {
            args: Prisma.Calendar_tokensAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCalendar_tokens>
          }
          groupBy: {
            args: Prisma.calendar_tokensGroupByArgs<ExtArgs>
            result: $Utils.Optional<Calendar_tokensGroupByOutputType>[]
          }
          count: {
            args: Prisma.calendar_tokensCountArgs<ExtArgs>
            result: $Utils.Optional<Calendar_tokensCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    users?: usersOmit
    calendars?: calendarsOmit
    events?: eventsOmit
    sync_tokens?: sync_tokensOmit
    job_offers?: job_offersOmit
    job_applications?: job_applicationsOmit
    jobs?: jobsOmit
    calendar_tokens?: calendar_tokensOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    calendars: number
    job_offers: number
    job_applications: number
    calendar_tokens: number
    sync_tokens: number
    jobs: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    calendars?: boolean | UsersCountOutputTypeCountCalendarsArgs
    job_offers?: boolean | UsersCountOutputTypeCountJob_offersArgs
    job_applications?: boolean | UsersCountOutputTypeCountJob_applicationsArgs
    calendar_tokens?: boolean | UsersCountOutputTypeCountCalendar_tokensArgs
    sync_tokens?: boolean | UsersCountOutputTypeCountSync_tokensArgs
    jobs?: boolean | UsersCountOutputTypeCountJobsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCalendarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: calendarsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountJob_offersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: job_offersWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountJob_applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: job_applicationsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCalendar_tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: calendar_tokensWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountSync_tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sync_tokensWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: jobsWhereInput
  }


  /**
   * Count Type CalendarsCountOutputType
   */

  export type CalendarsCountOutputType = {
    events: number
  }

  export type CalendarsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | CalendarsCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * CalendarsCountOutputType without action
   */
  export type CalendarsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarsCountOutputType
     */
    select?: CalendarsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CalendarsCountOutputType without action
   */
  export type CalendarsCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: eventsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
    groupId: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
    groupId: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    name: string | null
    groupId: number | null
    color: string | null
    avatar: string | null
    password: string | null
    token: string | null
    isAdmin: boolean | null
    createdAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    groupId: number | null
    color: string | null
    avatar: string | null
    password: string | null
    token: string | null
    isAdmin: boolean | null
    createdAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    groupId: number
    color: number
    avatar: number
    password: number
    token: number
    isAdmin: number
    createdAt: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
    groupId?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
    groupId?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    groupId?: true
    color?: true
    avatar?: true
    password?: true
    token?: true
    isAdmin?: true
    createdAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    groupId?: true
    color?: true
    avatar?: true
    password?: true
    token?: true
    isAdmin?: true
    createdAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    groupId?: true
    color?: true
    avatar?: true
    password?: true
    token?: true
    isAdmin?: true
    createdAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    name: string
    groupId: number | null
    color: string
    avatar: string
    password: string
    token: string
    isAdmin: boolean
    createdAt: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    groupId?: boolean
    color?: boolean
    avatar?: boolean
    password?: boolean
    token?: boolean
    isAdmin?: boolean
    createdAt?: boolean
    calendars?: boolean | users$calendarsArgs<ExtArgs>
    job_offers?: boolean | users$job_offersArgs<ExtArgs>
    job_applications?: boolean | users$job_applicationsArgs<ExtArgs>
    calendar_tokens?: boolean | users$calendar_tokensArgs<ExtArgs>
    sync_tokens?: boolean | users$sync_tokensArgs<ExtArgs>
    jobs?: boolean | users$jobsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    groupId?: boolean
    color?: boolean
    avatar?: boolean
    password?: boolean
    token?: boolean
    isAdmin?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    groupId?: boolean
    color?: boolean
    avatar?: boolean
    password?: boolean
    token?: boolean
    isAdmin?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    name?: boolean
    groupId?: boolean
    color?: boolean
    avatar?: boolean
    password?: boolean
    token?: boolean
    isAdmin?: boolean
    createdAt?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "groupId" | "color" | "avatar" | "password" | "token" | "isAdmin" | "createdAt", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    calendars?: boolean | users$calendarsArgs<ExtArgs>
    job_offers?: boolean | users$job_offersArgs<ExtArgs>
    job_applications?: boolean | users$job_applicationsArgs<ExtArgs>
    calendar_tokens?: boolean | users$calendar_tokensArgs<ExtArgs>
    sync_tokens?: boolean | users$sync_tokensArgs<ExtArgs>
    jobs?: boolean | users$jobsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      calendars: Prisma.$calendarsPayload<ExtArgs>[]
      job_offers: Prisma.$job_offersPayload<ExtArgs>[]
      job_applications: Prisma.$job_applicationsPayload<ExtArgs>[]
      calendar_tokens: Prisma.$calendar_tokensPayload<ExtArgs>[]
      sync_tokens: Prisma.$sync_tokensPayload<ExtArgs>[]
      jobs: Prisma.$jobsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      groupId: number | null
      color: string
      avatar: string
      password: string
      token: string
      isAdmin: boolean
      createdAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    calendars<T extends users$calendarsArgs<ExtArgs> = {}>(args?: Subset<T, users$calendarsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$calendarsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    job_offers<T extends users$job_offersArgs<ExtArgs> = {}>(args?: Subset<T, users$job_offersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$job_offersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    job_applications<T extends users$job_applicationsArgs<ExtArgs> = {}>(args?: Subset<T, users$job_applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$job_applicationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    calendar_tokens<T extends users$calendar_tokensArgs<ExtArgs> = {}>(args?: Subset<T, users$calendar_tokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$calendar_tokensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sync_tokens<T extends users$sync_tokensArgs<ExtArgs> = {}>(args?: Subset<T, users$sync_tokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sync_tokensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    jobs<T extends users$jobsArgs<ExtArgs> = {}>(args?: Subset<T, users$jobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly name: FieldRef<"users", 'String'>
    readonly groupId: FieldRef<"users", 'Int'>
    readonly color: FieldRef<"users", 'String'>
    readonly avatar: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly token: FieldRef<"users", 'String'>
    readonly isAdmin: FieldRef<"users", 'Boolean'>
    readonly createdAt: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.calendars
   */
  export type users$calendarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calendars
     */
    select?: calendarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calendars
     */
    omit?: calendarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calendarsInclude<ExtArgs> | null
    where?: calendarsWhereInput
    orderBy?: calendarsOrderByWithRelationInput | calendarsOrderByWithRelationInput[]
    cursor?: calendarsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CalendarsScalarFieldEnum | CalendarsScalarFieldEnum[]
  }

  /**
   * users.job_offers
   */
  export type users$job_offersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_offers
     */
    select?: job_offersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_offers
     */
    omit?: job_offersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_offersInclude<ExtArgs> | null
    where?: job_offersWhereInput
    orderBy?: job_offersOrderByWithRelationInput | job_offersOrderByWithRelationInput[]
    cursor?: job_offersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Job_offersScalarFieldEnum | Job_offersScalarFieldEnum[]
  }

  /**
   * users.job_applications
   */
  export type users$job_applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_applications
     */
    select?: job_applicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_applications
     */
    omit?: job_applicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_applicationsInclude<ExtArgs> | null
    where?: job_applicationsWhereInput
    orderBy?: job_applicationsOrderByWithRelationInput | job_applicationsOrderByWithRelationInput[]
    cursor?: job_applicationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Job_applicationsScalarFieldEnum | Job_applicationsScalarFieldEnum[]
  }

  /**
   * users.calendar_tokens
   */
  export type users$calendar_tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calendar_tokens
     */
    select?: calendar_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calendar_tokens
     */
    omit?: calendar_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calendar_tokensInclude<ExtArgs> | null
    where?: calendar_tokensWhereInput
    orderBy?: calendar_tokensOrderByWithRelationInput | calendar_tokensOrderByWithRelationInput[]
    cursor?: calendar_tokensWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Calendar_tokensScalarFieldEnum | Calendar_tokensScalarFieldEnum[]
  }

  /**
   * users.sync_tokens
   */
  export type users$sync_tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sync_tokens
     */
    select?: sync_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sync_tokens
     */
    omit?: sync_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sync_tokensInclude<ExtArgs> | null
    where?: sync_tokensWhereInput
    orderBy?: sync_tokensOrderByWithRelationInput | sync_tokensOrderByWithRelationInput[]
    cursor?: sync_tokensWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Sync_tokensScalarFieldEnum | Sync_tokensScalarFieldEnum[]
  }

  /**
   * users.jobs
   */
  export type users$jobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobsInclude<ExtArgs> | null
    where?: jobsWhereInput
    orderBy?: jobsOrderByWithRelationInput | jobsOrderByWithRelationInput[]
    cursor?: jobsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobsScalarFieldEnum | JobsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model calendars
   */

  export type AggregateCalendars = {
    _count: CalendarsCountAggregateOutputType | null
    _avg: CalendarsAvgAggregateOutputType | null
    _sum: CalendarsSumAggregateOutputType | null
    _min: CalendarsMinAggregateOutputType | null
    _max: CalendarsMaxAggregateOutputType | null
  }

  export type CalendarsAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type CalendarsSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type CalendarsMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    userId: number | null
    timezone: string | null
    createdAt: Date | null
  }

  export type CalendarsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    userId: number | null
    timezone: string | null
    createdAt: Date | null
  }

  export type CalendarsCountAggregateOutputType = {
    id: number
    name: number
    email: number
    userId: number
    timezone: number
    createdAt: number
    _all: number
  }


  export type CalendarsAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type CalendarsSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type CalendarsMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    userId?: true
    timezone?: true
    createdAt?: true
  }

  export type CalendarsMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    userId?: true
    timezone?: true
    createdAt?: true
  }

  export type CalendarsCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    userId?: true
    timezone?: true
    createdAt?: true
    _all?: true
  }

  export type CalendarsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which calendars to aggregate.
     */
    where?: calendarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of calendars to fetch.
     */
    orderBy?: calendarsOrderByWithRelationInput | calendarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: calendarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` calendars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` calendars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned calendars
    **/
    _count?: true | CalendarsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CalendarsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CalendarsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CalendarsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CalendarsMaxAggregateInputType
  }

  export type GetCalendarsAggregateType<T extends CalendarsAggregateArgs> = {
        [P in keyof T & keyof AggregateCalendars]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCalendars[P]>
      : GetScalarType<T[P], AggregateCalendars[P]>
  }




  export type calendarsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: calendarsWhereInput
    orderBy?: calendarsOrderByWithAggregationInput | calendarsOrderByWithAggregationInput[]
    by: CalendarsScalarFieldEnum[] | CalendarsScalarFieldEnum
    having?: calendarsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CalendarsCountAggregateInputType | true
    _avg?: CalendarsAvgAggregateInputType
    _sum?: CalendarsSumAggregateInputType
    _min?: CalendarsMinAggregateInputType
    _max?: CalendarsMaxAggregateInputType
  }

  export type CalendarsGroupByOutputType = {
    id: number
    name: string
    email: string
    userId: number
    timezone: string
    createdAt: Date
    _count: CalendarsCountAggregateOutputType | null
    _avg: CalendarsAvgAggregateOutputType | null
    _sum: CalendarsSumAggregateOutputType | null
    _min: CalendarsMinAggregateOutputType | null
    _max: CalendarsMaxAggregateOutputType | null
  }

  type GetCalendarsGroupByPayload<T extends calendarsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CalendarsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CalendarsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CalendarsGroupByOutputType[P]>
            : GetScalarType<T[P], CalendarsGroupByOutputType[P]>
        }
      >
    >


  export type calendarsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    userId?: boolean
    timezone?: boolean
    createdAt?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    events?: boolean | calendars$eventsArgs<ExtArgs>
    _count?: boolean | CalendarsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["calendars"]>

  export type calendarsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    userId?: boolean
    timezone?: boolean
    createdAt?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["calendars"]>

  export type calendarsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    userId?: boolean
    timezone?: boolean
    createdAt?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["calendars"]>

  export type calendarsSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    userId?: boolean
    timezone?: boolean
    createdAt?: boolean
  }

  export type calendarsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "userId" | "timezone" | "createdAt", ExtArgs["result"]["calendars"]>
  export type calendarsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    events?: boolean | calendars$eventsArgs<ExtArgs>
    _count?: boolean | CalendarsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type calendarsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type calendarsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $calendarsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "calendars"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
      events: Prisma.$eventsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      userId: number
      timezone: string
      createdAt: Date
    }, ExtArgs["result"]["calendars"]>
    composites: {}
  }

  type calendarsGetPayload<S extends boolean | null | undefined | calendarsDefaultArgs> = $Result.GetResult<Prisma.$calendarsPayload, S>

  type calendarsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<calendarsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CalendarsCountAggregateInputType | true
    }

  export interface calendarsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['calendars'], meta: { name: 'calendars' } }
    /**
     * Find zero or one Calendars that matches the filter.
     * @param {calendarsFindUniqueArgs} args - Arguments to find a Calendars
     * @example
     * // Get one Calendars
     * const calendars = await prisma.calendars.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends calendarsFindUniqueArgs>(args: SelectSubset<T, calendarsFindUniqueArgs<ExtArgs>>): Prisma__calendarsClient<$Result.GetResult<Prisma.$calendarsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Calendars that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {calendarsFindUniqueOrThrowArgs} args - Arguments to find a Calendars
     * @example
     * // Get one Calendars
     * const calendars = await prisma.calendars.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends calendarsFindUniqueOrThrowArgs>(args: SelectSubset<T, calendarsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__calendarsClient<$Result.GetResult<Prisma.$calendarsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Calendars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {calendarsFindFirstArgs} args - Arguments to find a Calendars
     * @example
     * // Get one Calendars
     * const calendars = await prisma.calendars.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends calendarsFindFirstArgs>(args?: SelectSubset<T, calendarsFindFirstArgs<ExtArgs>>): Prisma__calendarsClient<$Result.GetResult<Prisma.$calendarsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Calendars that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {calendarsFindFirstOrThrowArgs} args - Arguments to find a Calendars
     * @example
     * // Get one Calendars
     * const calendars = await prisma.calendars.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends calendarsFindFirstOrThrowArgs>(args?: SelectSubset<T, calendarsFindFirstOrThrowArgs<ExtArgs>>): Prisma__calendarsClient<$Result.GetResult<Prisma.$calendarsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Calendars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {calendarsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Calendars
     * const calendars = await prisma.calendars.findMany()
     * 
     * // Get first 10 Calendars
     * const calendars = await prisma.calendars.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const calendarsWithIdOnly = await prisma.calendars.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends calendarsFindManyArgs>(args?: SelectSubset<T, calendarsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$calendarsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Calendars.
     * @param {calendarsCreateArgs} args - Arguments to create a Calendars.
     * @example
     * // Create one Calendars
     * const Calendars = await prisma.calendars.create({
     *   data: {
     *     // ... data to create a Calendars
     *   }
     * })
     * 
     */
    create<T extends calendarsCreateArgs>(args: SelectSubset<T, calendarsCreateArgs<ExtArgs>>): Prisma__calendarsClient<$Result.GetResult<Prisma.$calendarsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Calendars.
     * @param {calendarsCreateManyArgs} args - Arguments to create many Calendars.
     * @example
     * // Create many Calendars
     * const calendars = await prisma.calendars.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends calendarsCreateManyArgs>(args?: SelectSubset<T, calendarsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Calendars and returns the data saved in the database.
     * @param {calendarsCreateManyAndReturnArgs} args - Arguments to create many Calendars.
     * @example
     * // Create many Calendars
     * const calendars = await prisma.calendars.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Calendars and only return the `id`
     * const calendarsWithIdOnly = await prisma.calendars.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends calendarsCreateManyAndReturnArgs>(args?: SelectSubset<T, calendarsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$calendarsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Calendars.
     * @param {calendarsDeleteArgs} args - Arguments to delete one Calendars.
     * @example
     * // Delete one Calendars
     * const Calendars = await prisma.calendars.delete({
     *   where: {
     *     // ... filter to delete one Calendars
     *   }
     * })
     * 
     */
    delete<T extends calendarsDeleteArgs>(args: SelectSubset<T, calendarsDeleteArgs<ExtArgs>>): Prisma__calendarsClient<$Result.GetResult<Prisma.$calendarsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Calendars.
     * @param {calendarsUpdateArgs} args - Arguments to update one Calendars.
     * @example
     * // Update one Calendars
     * const calendars = await prisma.calendars.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends calendarsUpdateArgs>(args: SelectSubset<T, calendarsUpdateArgs<ExtArgs>>): Prisma__calendarsClient<$Result.GetResult<Prisma.$calendarsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Calendars.
     * @param {calendarsDeleteManyArgs} args - Arguments to filter Calendars to delete.
     * @example
     * // Delete a few Calendars
     * const { count } = await prisma.calendars.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends calendarsDeleteManyArgs>(args?: SelectSubset<T, calendarsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Calendars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {calendarsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Calendars
     * const calendars = await prisma.calendars.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends calendarsUpdateManyArgs>(args: SelectSubset<T, calendarsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Calendars and returns the data updated in the database.
     * @param {calendarsUpdateManyAndReturnArgs} args - Arguments to update many Calendars.
     * @example
     * // Update many Calendars
     * const calendars = await prisma.calendars.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Calendars and only return the `id`
     * const calendarsWithIdOnly = await prisma.calendars.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends calendarsUpdateManyAndReturnArgs>(args: SelectSubset<T, calendarsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$calendarsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Calendars.
     * @param {calendarsUpsertArgs} args - Arguments to update or create a Calendars.
     * @example
     * // Update or create a Calendars
     * const calendars = await prisma.calendars.upsert({
     *   create: {
     *     // ... data to create a Calendars
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Calendars we want to update
     *   }
     * })
     */
    upsert<T extends calendarsUpsertArgs>(args: SelectSubset<T, calendarsUpsertArgs<ExtArgs>>): Prisma__calendarsClient<$Result.GetResult<Prisma.$calendarsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Calendars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {calendarsCountArgs} args - Arguments to filter Calendars to count.
     * @example
     * // Count the number of Calendars
     * const count = await prisma.calendars.count({
     *   where: {
     *     // ... the filter for the Calendars we want to count
     *   }
     * })
    **/
    count<T extends calendarsCountArgs>(
      args?: Subset<T, calendarsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CalendarsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Calendars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CalendarsAggregateArgs>(args: Subset<T, CalendarsAggregateArgs>): Prisma.PrismaPromise<GetCalendarsAggregateType<T>>

    /**
     * Group by Calendars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {calendarsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends calendarsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: calendarsGroupByArgs['orderBy'] }
        : { orderBy?: calendarsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, calendarsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCalendarsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the calendars model
   */
  readonly fields: calendarsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for calendars.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__calendarsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    events<T extends calendars$eventsArgs<ExtArgs> = {}>(args?: Subset<T, calendars$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the calendars model
   */
  interface calendarsFieldRefs {
    readonly id: FieldRef<"calendars", 'Int'>
    readonly name: FieldRef<"calendars", 'String'>
    readonly email: FieldRef<"calendars", 'String'>
    readonly userId: FieldRef<"calendars", 'Int'>
    readonly timezone: FieldRef<"calendars", 'String'>
    readonly createdAt: FieldRef<"calendars", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * calendars findUnique
   */
  export type calendarsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calendars
     */
    select?: calendarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calendars
     */
    omit?: calendarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calendarsInclude<ExtArgs> | null
    /**
     * Filter, which calendars to fetch.
     */
    where: calendarsWhereUniqueInput
  }

  /**
   * calendars findUniqueOrThrow
   */
  export type calendarsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calendars
     */
    select?: calendarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calendars
     */
    omit?: calendarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calendarsInclude<ExtArgs> | null
    /**
     * Filter, which calendars to fetch.
     */
    where: calendarsWhereUniqueInput
  }

  /**
   * calendars findFirst
   */
  export type calendarsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calendars
     */
    select?: calendarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calendars
     */
    omit?: calendarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calendarsInclude<ExtArgs> | null
    /**
     * Filter, which calendars to fetch.
     */
    where?: calendarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of calendars to fetch.
     */
    orderBy?: calendarsOrderByWithRelationInput | calendarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for calendars.
     */
    cursor?: calendarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` calendars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` calendars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of calendars.
     */
    distinct?: CalendarsScalarFieldEnum | CalendarsScalarFieldEnum[]
  }

  /**
   * calendars findFirstOrThrow
   */
  export type calendarsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calendars
     */
    select?: calendarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calendars
     */
    omit?: calendarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calendarsInclude<ExtArgs> | null
    /**
     * Filter, which calendars to fetch.
     */
    where?: calendarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of calendars to fetch.
     */
    orderBy?: calendarsOrderByWithRelationInput | calendarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for calendars.
     */
    cursor?: calendarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` calendars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` calendars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of calendars.
     */
    distinct?: CalendarsScalarFieldEnum | CalendarsScalarFieldEnum[]
  }

  /**
   * calendars findMany
   */
  export type calendarsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calendars
     */
    select?: calendarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calendars
     */
    omit?: calendarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calendarsInclude<ExtArgs> | null
    /**
     * Filter, which calendars to fetch.
     */
    where?: calendarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of calendars to fetch.
     */
    orderBy?: calendarsOrderByWithRelationInput | calendarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing calendars.
     */
    cursor?: calendarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` calendars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` calendars.
     */
    skip?: number
    distinct?: CalendarsScalarFieldEnum | CalendarsScalarFieldEnum[]
  }

  /**
   * calendars create
   */
  export type calendarsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calendars
     */
    select?: calendarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calendars
     */
    omit?: calendarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calendarsInclude<ExtArgs> | null
    /**
     * The data needed to create a calendars.
     */
    data: XOR<calendarsCreateInput, calendarsUncheckedCreateInput>
  }

  /**
   * calendars createMany
   */
  export type calendarsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many calendars.
     */
    data: calendarsCreateManyInput | calendarsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * calendars createManyAndReturn
   */
  export type calendarsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calendars
     */
    select?: calendarsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the calendars
     */
    omit?: calendarsOmit<ExtArgs> | null
    /**
     * The data used to create many calendars.
     */
    data: calendarsCreateManyInput | calendarsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calendarsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * calendars update
   */
  export type calendarsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calendars
     */
    select?: calendarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calendars
     */
    omit?: calendarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calendarsInclude<ExtArgs> | null
    /**
     * The data needed to update a calendars.
     */
    data: XOR<calendarsUpdateInput, calendarsUncheckedUpdateInput>
    /**
     * Choose, which calendars to update.
     */
    where: calendarsWhereUniqueInput
  }

  /**
   * calendars updateMany
   */
  export type calendarsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update calendars.
     */
    data: XOR<calendarsUpdateManyMutationInput, calendarsUncheckedUpdateManyInput>
    /**
     * Filter which calendars to update
     */
    where?: calendarsWhereInput
    /**
     * Limit how many calendars to update.
     */
    limit?: number
  }

  /**
   * calendars updateManyAndReturn
   */
  export type calendarsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calendars
     */
    select?: calendarsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the calendars
     */
    omit?: calendarsOmit<ExtArgs> | null
    /**
     * The data used to update calendars.
     */
    data: XOR<calendarsUpdateManyMutationInput, calendarsUncheckedUpdateManyInput>
    /**
     * Filter which calendars to update
     */
    where?: calendarsWhereInput
    /**
     * Limit how many calendars to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calendarsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * calendars upsert
   */
  export type calendarsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calendars
     */
    select?: calendarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calendars
     */
    omit?: calendarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calendarsInclude<ExtArgs> | null
    /**
     * The filter to search for the calendars to update in case it exists.
     */
    where: calendarsWhereUniqueInput
    /**
     * In case the calendars found by the `where` argument doesn't exist, create a new calendars with this data.
     */
    create: XOR<calendarsCreateInput, calendarsUncheckedCreateInput>
    /**
     * In case the calendars was found with the provided `where` argument, update it with this data.
     */
    update: XOR<calendarsUpdateInput, calendarsUncheckedUpdateInput>
  }

  /**
   * calendars delete
   */
  export type calendarsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calendars
     */
    select?: calendarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calendars
     */
    omit?: calendarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calendarsInclude<ExtArgs> | null
    /**
     * Filter which calendars to delete.
     */
    where: calendarsWhereUniqueInput
  }

  /**
   * calendars deleteMany
   */
  export type calendarsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which calendars to delete
     */
    where?: calendarsWhereInput
    /**
     * Limit how many calendars to delete.
     */
    limit?: number
  }

  /**
   * calendars.events
   */
  export type calendars$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    where?: eventsWhereInput
    orderBy?: eventsOrderByWithRelationInput | eventsOrderByWithRelationInput[]
    cursor?: eventsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * calendars without action
   */
  export type calendarsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calendars
     */
    select?: calendarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calendars
     */
    omit?: calendarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calendarsInclude<ExtArgs> | null
  }


  /**
   * Model events
   */

  export type AggregateEvents = {
    _count: EventsCountAggregateOutputType | null
    _avg: EventsAvgAggregateOutputType | null
    _sum: EventsSumAggregateOutputType | null
    _min: EventsMinAggregateOutputType | null
    _max: EventsMaxAggregateOutputType | null
  }

  export type EventsAvgAggregateOutputType = {
    id: number | null
    calendarId: number | null
  }

  export type EventsSumAggregateOutputType = {
    id: number | null
    calendarId: number | null
  }

  export type EventsMinAggregateOutputType = {
    id: number | null
    calendarId: number | null
    eventId: string | null
    summary: string | null
    description: string | null
    creator: string | null
    organizer: string | null
    start: Date | null
    end: Date | null
    createdAt: Date | null
  }

  export type EventsMaxAggregateOutputType = {
    id: number | null
    calendarId: number | null
    eventId: string | null
    summary: string | null
    description: string | null
    creator: string | null
    organizer: string | null
    start: Date | null
    end: Date | null
    createdAt: Date | null
  }

  export type EventsCountAggregateOutputType = {
    id: number
    calendarId: number
    eventId: number
    summary: number
    description: number
    creator: number
    organizer: number
    start: number
    end: number
    createdAt: number
    _all: number
  }


  export type EventsAvgAggregateInputType = {
    id?: true
    calendarId?: true
  }

  export type EventsSumAggregateInputType = {
    id?: true
    calendarId?: true
  }

  export type EventsMinAggregateInputType = {
    id?: true
    calendarId?: true
    eventId?: true
    summary?: true
    description?: true
    creator?: true
    organizer?: true
    start?: true
    end?: true
    createdAt?: true
  }

  export type EventsMaxAggregateInputType = {
    id?: true
    calendarId?: true
    eventId?: true
    summary?: true
    description?: true
    creator?: true
    organizer?: true
    start?: true
    end?: true
    createdAt?: true
  }

  export type EventsCountAggregateInputType = {
    id?: true
    calendarId?: true
    eventId?: true
    summary?: true
    description?: true
    creator?: true
    organizer?: true
    start?: true
    end?: true
    createdAt?: true
    _all?: true
  }

  export type EventsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which events to aggregate.
     */
    where?: eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events to fetch.
     */
    orderBy?: eventsOrderByWithRelationInput | eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned events
    **/
    _count?: true | EventsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventsMaxAggregateInputType
  }

  export type GetEventsAggregateType<T extends EventsAggregateArgs> = {
        [P in keyof T & keyof AggregateEvents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvents[P]>
      : GetScalarType<T[P], AggregateEvents[P]>
  }




  export type eventsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: eventsWhereInput
    orderBy?: eventsOrderByWithAggregationInput | eventsOrderByWithAggregationInput[]
    by: EventsScalarFieldEnum[] | EventsScalarFieldEnum
    having?: eventsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventsCountAggregateInputType | true
    _avg?: EventsAvgAggregateInputType
    _sum?: EventsSumAggregateInputType
    _min?: EventsMinAggregateInputType
    _max?: EventsMaxAggregateInputType
  }

  export type EventsGroupByOutputType = {
    id: number
    calendarId: number
    eventId: string
    summary: string
    description: string
    creator: string
    organizer: string
    start: Date
    end: Date
    createdAt: Date
    _count: EventsCountAggregateOutputType | null
    _avg: EventsAvgAggregateOutputType | null
    _sum: EventsSumAggregateOutputType | null
    _min: EventsMinAggregateOutputType | null
    _max: EventsMaxAggregateOutputType | null
  }

  type GetEventsGroupByPayload<T extends eventsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventsGroupByOutputType[P]>
            : GetScalarType<T[P], EventsGroupByOutputType[P]>
        }
      >
    >


  export type eventsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    calendarId?: boolean
    eventId?: boolean
    summary?: boolean
    description?: boolean
    creator?: boolean
    organizer?: boolean
    start?: boolean
    end?: boolean
    createdAt?: boolean
    calendar?: boolean | calendarsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["events"]>

  export type eventsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    calendarId?: boolean
    eventId?: boolean
    summary?: boolean
    description?: boolean
    creator?: boolean
    organizer?: boolean
    start?: boolean
    end?: boolean
    createdAt?: boolean
    calendar?: boolean | calendarsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["events"]>

  export type eventsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    calendarId?: boolean
    eventId?: boolean
    summary?: boolean
    description?: boolean
    creator?: boolean
    organizer?: boolean
    start?: boolean
    end?: boolean
    createdAt?: boolean
    calendar?: boolean | calendarsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["events"]>

  export type eventsSelectScalar = {
    id?: boolean
    calendarId?: boolean
    eventId?: boolean
    summary?: boolean
    description?: boolean
    creator?: boolean
    organizer?: boolean
    start?: boolean
    end?: boolean
    createdAt?: boolean
  }

  export type eventsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "calendarId" | "eventId" | "summary" | "description" | "creator" | "organizer" | "start" | "end" | "createdAt", ExtArgs["result"]["events"]>
  export type eventsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    calendar?: boolean | calendarsDefaultArgs<ExtArgs>
  }
  export type eventsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    calendar?: boolean | calendarsDefaultArgs<ExtArgs>
  }
  export type eventsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    calendar?: boolean | calendarsDefaultArgs<ExtArgs>
  }

  export type $eventsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "events"
    objects: {
      calendar: Prisma.$calendarsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      calendarId: number
      eventId: string
      summary: string
      description: string
      creator: string
      organizer: string
      start: Date
      end: Date
      createdAt: Date
    }, ExtArgs["result"]["events"]>
    composites: {}
  }

  type eventsGetPayload<S extends boolean | null | undefined | eventsDefaultArgs> = $Result.GetResult<Prisma.$eventsPayload, S>

  type eventsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<eventsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventsCountAggregateInputType | true
    }

  export interface eventsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['events'], meta: { name: 'events' } }
    /**
     * Find zero or one Events that matches the filter.
     * @param {eventsFindUniqueArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends eventsFindUniqueArgs>(args: SelectSubset<T, eventsFindUniqueArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Events that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {eventsFindUniqueOrThrowArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends eventsFindUniqueOrThrowArgs>(args: SelectSubset<T, eventsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsFindFirstArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends eventsFindFirstArgs>(args?: SelectSubset<T, eventsFindFirstArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Events that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsFindFirstOrThrowArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends eventsFindFirstOrThrowArgs>(args?: SelectSubset<T, eventsFindFirstOrThrowArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.events.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.events.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventsWithIdOnly = await prisma.events.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends eventsFindManyArgs>(args?: SelectSubset<T, eventsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Events.
     * @param {eventsCreateArgs} args - Arguments to create a Events.
     * @example
     * // Create one Events
     * const Events = await prisma.events.create({
     *   data: {
     *     // ... data to create a Events
     *   }
     * })
     * 
     */
    create<T extends eventsCreateArgs>(args: SelectSubset<T, eventsCreateArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {eventsCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const events = await prisma.events.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends eventsCreateManyArgs>(args?: SelectSubset<T, eventsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {eventsCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const events = await prisma.events.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventsWithIdOnly = await prisma.events.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends eventsCreateManyAndReturnArgs>(args?: SelectSubset<T, eventsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Events.
     * @param {eventsDeleteArgs} args - Arguments to delete one Events.
     * @example
     * // Delete one Events
     * const Events = await prisma.events.delete({
     *   where: {
     *     // ... filter to delete one Events
     *   }
     * })
     * 
     */
    delete<T extends eventsDeleteArgs>(args: SelectSubset<T, eventsDeleteArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Events.
     * @param {eventsUpdateArgs} args - Arguments to update one Events.
     * @example
     * // Update one Events
     * const events = await prisma.events.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends eventsUpdateArgs>(args: SelectSubset<T, eventsUpdateArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {eventsDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.events.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends eventsDeleteManyArgs>(args?: SelectSubset<T, eventsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const events = await prisma.events.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends eventsUpdateManyArgs>(args: SelectSubset<T, eventsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {eventsUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const events = await prisma.events.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventsWithIdOnly = await prisma.events.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends eventsUpdateManyAndReturnArgs>(args: SelectSubset<T, eventsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Events.
     * @param {eventsUpsertArgs} args - Arguments to update or create a Events.
     * @example
     * // Update or create a Events
     * const events = await prisma.events.upsert({
     *   create: {
     *     // ... data to create a Events
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Events we want to update
     *   }
     * })
     */
    upsert<T extends eventsUpsertArgs>(args: SelectSubset<T, eventsUpsertArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.events.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends eventsCountArgs>(
      args?: Subset<T, eventsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventsAggregateArgs>(args: Subset<T, EventsAggregateArgs>): Prisma.PrismaPromise<GetEventsAggregateType<T>>

    /**
     * Group by Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends eventsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: eventsGroupByArgs['orderBy'] }
        : { orderBy?: eventsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, eventsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the events model
   */
  readonly fields: eventsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for events.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__eventsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    calendar<T extends calendarsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, calendarsDefaultArgs<ExtArgs>>): Prisma__calendarsClient<$Result.GetResult<Prisma.$calendarsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the events model
   */
  interface eventsFieldRefs {
    readonly id: FieldRef<"events", 'Int'>
    readonly calendarId: FieldRef<"events", 'Int'>
    readonly eventId: FieldRef<"events", 'String'>
    readonly summary: FieldRef<"events", 'String'>
    readonly description: FieldRef<"events", 'String'>
    readonly creator: FieldRef<"events", 'String'>
    readonly organizer: FieldRef<"events", 'String'>
    readonly start: FieldRef<"events", 'DateTime'>
    readonly end: FieldRef<"events", 'DateTime'>
    readonly createdAt: FieldRef<"events", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * events findUnique
   */
  export type eventsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * Filter, which events to fetch.
     */
    where: eventsWhereUniqueInput
  }

  /**
   * events findUniqueOrThrow
   */
  export type eventsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * Filter, which events to fetch.
     */
    where: eventsWhereUniqueInput
  }

  /**
   * events findFirst
   */
  export type eventsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * Filter, which events to fetch.
     */
    where?: eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events to fetch.
     */
    orderBy?: eventsOrderByWithRelationInput | eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for events.
     */
    cursor?: eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of events.
     */
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * events findFirstOrThrow
   */
  export type eventsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * Filter, which events to fetch.
     */
    where?: eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events to fetch.
     */
    orderBy?: eventsOrderByWithRelationInput | eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for events.
     */
    cursor?: eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of events.
     */
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * events findMany
   */
  export type eventsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * Filter, which events to fetch.
     */
    where?: eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events to fetch.
     */
    orderBy?: eventsOrderByWithRelationInput | eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing events.
     */
    cursor?: eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events.
     */
    skip?: number
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * events create
   */
  export type eventsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * The data needed to create a events.
     */
    data: XOR<eventsCreateInput, eventsUncheckedCreateInput>
  }

  /**
   * events createMany
   */
  export type eventsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many events.
     */
    data: eventsCreateManyInput | eventsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * events createManyAndReturn
   */
  export type eventsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * The data used to create many events.
     */
    data: eventsCreateManyInput | eventsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * events update
   */
  export type eventsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * The data needed to update a events.
     */
    data: XOR<eventsUpdateInput, eventsUncheckedUpdateInput>
    /**
     * Choose, which events to update.
     */
    where: eventsWhereUniqueInput
  }

  /**
   * events updateMany
   */
  export type eventsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update events.
     */
    data: XOR<eventsUpdateManyMutationInput, eventsUncheckedUpdateManyInput>
    /**
     * Filter which events to update
     */
    where?: eventsWhereInput
    /**
     * Limit how many events to update.
     */
    limit?: number
  }

  /**
   * events updateManyAndReturn
   */
  export type eventsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * The data used to update events.
     */
    data: XOR<eventsUpdateManyMutationInput, eventsUncheckedUpdateManyInput>
    /**
     * Filter which events to update
     */
    where?: eventsWhereInput
    /**
     * Limit how many events to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * events upsert
   */
  export type eventsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * The filter to search for the events to update in case it exists.
     */
    where: eventsWhereUniqueInput
    /**
     * In case the events found by the `where` argument doesn't exist, create a new events with this data.
     */
    create: XOR<eventsCreateInput, eventsUncheckedCreateInput>
    /**
     * In case the events was found with the provided `where` argument, update it with this data.
     */
    update: XOR<eventsUpdateInput, eventsUncheckedUpdateInput>
  }

  /**
   * events delete
   */
  export type eventsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * Filter which events to delete.
     */
    where: eventsWhereUniqueInput
  }

  /**
   * events deleteMany
   */
  export type eventsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which events to delete
     */
    where?: eventsWhereInput
    /**
     * Limit how many events to delete.
     */
    limit?: number
  }

  /**
   * events without action
   */
  export type eventsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
  }


  /**
   * Model sync_tokens
   */

  export type AggregateSync_tokens = {
    _count: Sync_tokensCountAggregateOutputType | null
    _avg: Sync_tokensAvgAggregateOutputType | null
    _sum: Sync_tokensSumAggregateOutputType | null
    _min: Sync_tokensMinAggregateOutputType | null
    _max: Sync_tokensMaxAggregateOutputType | null
  }

  export type Sync_tokensAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type Sync_tokensSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type Sync_tokensMinAggregateOutputType = {
    id: number | null
    name: string | null
    token: string | null
    userId: number | null
    createdAt: Date | null
  }

  export type Sync_tokensMaxAggregateOutputType = {
    id: number | null
    name: string | null
    token: string | null
    userId: number | null
    createdAt: Date | null
  }

  export type Sync_tokensCountAggregateOutputType = {
    id: number
    name: number
    token: number
    userId: number
    createdAt: number
    _all: number
  }


  export type Sync_tokensAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type Sync_tokensSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type Sync_tokensMinAggregateInputType = {
    id?: true
    name?: true
    token?: true
    userId?: true
    createdAt?: true
  }

  export type Sync_tokensMaxAggregateInputType = {
    id?: true
    name?: true
    token?: true
    userId?: true
    createdAt?: true
  }

  export type Sync_tokensCountAggregateInputType = {
    id?: true
    name?: true
    token?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type Sync_tokensAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sync_tokens to aggregate.
     */
    where?: sync_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sync_tokens to fetch.
     */
    orderBy?: sync_tokensOrderByWithRelationInput | sync_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sync_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sync_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sync_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sync_tokens
    **/
    _count?: true | Sync_tokensCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Sync_tokensAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Sync_tokensSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Sync_tokensMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Sync_tokensMaxAggregateInputType
  }

  export type GetSync_tokensAggregateType<T extends Sync_tokensAggregateArgs> = {
        [P in keyof T & keyof AggregateSync_tokens]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSync_tokens[P]>
      : GetScalarType<T[P], AggregateSync_tokens[P]>
  }




  export type sync_tokensGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sync_tokensWhereInput
    orderBy?: sync_tokensOrderByWithAggregationInput | sync_tokensOrderByWithAggregationInput[]
    by: Sync_tokensScalarFieldEnum[] | Sync_tokensScalarFieldEnum
    having?: sync_tokensScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Sync_tokensCountAggregateInputType | true
    _avg?: Sync_tokensAvgAggregateInputType
    _sum?: Sync_tokensSumAggregateInputType
    _min?: Sync_tokensMinAggregateInputType
    _max?: Sync_tokensMaxAggregateInputType
  }

  export type Sync_tokensGroupByOutputType = {
    id: number
    name: string
    token: string
    userId: number
    createdAt: Date
    _count: Sync_tokensCountAggregateOutputType | null
    _avg: Sync_tokensAvgAggregateOutputType | null
    _sum: Sync_tokensSumAggregateOutputType | null
    _min: Sync_tokensMinAggregateOutputType | null
    _max: Sync_tokensMaxAggregateOutputType | null
  }

  type GetSync_tokensGroupByPayload<T extends sync_tokensGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Sync_tokensGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Sync_tokensGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Sync_tokensGroupByOutputType[P]>
            : GetScalarType<T[P], Sync_tokensGroupByOutputType[P]>
        }
      >
    >


  export type sync_tokensSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    token?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sync_tokens"]>

  export type sync_tokensSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    token?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sync_tokens"]>

  export type sync_tokensSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    token?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sync_tokens"]>

  export type sync_tokensSelectScalar = {
    id?: boolean
    name?: boolean
    token?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type sync_tokensOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "token" | "userId" | "createdAt", ExtArgs["result"]["sync_tokens"]>
  export type sync_tokensInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type sync_tokensIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type sync_tokensIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $sync_tokensPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sync_tokens"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      token: string
      userId: number
      createdAt: Date
    }, ExtArgs["result"]["sync_tokens"]>
    composites: {}
  }

  type sync_tokensGetPayload<S extends boolean | null | undefined | sync_tokensDefaultArgs> = $Result.GetResult<Prisma.$sync_tokensPayload, S>

  type sync_tokensCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sync_tokensFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Sync_tokensCountAggregateInputType | true
    }

  export interface sync_tokensDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sync_tokens'], meta: { name: 'sync_tokens' } }
    /**
     * Find zero or one Sync_tokens that matches the filter.
     * @param {sync_tokensFindUniqueArgs} args - Arguments to find a Sync_tokens
     * @example
     * // Get one Sync_tokens
     * const sync_tokens = await prisma.sync_tokens.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sync_tokensFindUniqueArgs>(args: SelectSubset<T, sync_tokensFindUniqueArgs<ExtArgs>>): Prisma__sync_tokensClient<$Result.GetResult<Prisma.$sync_tokensPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sync_tokens that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sync_tokensFindUniqueOrThrowArgs} args - Arguments to find a Sync_tokens
     * @example
     * // Get one Sync_tokens
     * const sync_tokens = await prisma.sync_tokens.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sync_tokensFindUniqueOrThrowArgs>(args: SelectSubset<T, sync_tokensFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sync_tokensClient<$Result.GetResult<Prisma.$sync_tokensPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sync_tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sync_tokensFindFirstArgs} args - Arguments to find a Sync_tokens
     * @example
     * // Get one Sync_tokens
     * const sync_tokens = await prisma.sync_tokens.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sync_tokensFindFirstArgs>(args?: SelectSubset<T, sync_tokensFindFirstArgs<ExtArgs>>): Prisma__sync_tokensClient<$Result.GetResult<Prisma.$sync_tokensPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sync_tokens that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sync_tokensFindFirstOrThrowArgs} args - Arguments to find a Sync_tokens
     * @example
     * // Get one Sync_tokens
     * const sync_tokens = await prisma.sync_tokens.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sync_tokensFindFirstOrThrowArgs>(args?: SelectSubset<T, sync_tokensFindFirstOrThrowArgs<ExtArgs>>): Prisma__sync_tokensClient<$Result.GetResult<Prisma.$sync_tokensPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sync_tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sync_tokensFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sync_tokens
     * const sync_tokens = await prisma.sync_tokens.findMany()
     * 
     * // Get first 10 Sync_tokens
     * const sync_tokens = await prisma.sync_tokens.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sync_tokensWithIdOnly = await prisma.sync_tokens.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sync_tokensFindManyArgs>(args?: SelectSubset<T, sync_tokensFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sync_tokensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sync_tokens.
     * @param {sync_tokensCreateArgs} args - Arguments to create a Sync_tokens.
     * @example
     * // Create one Sync_tokens
     * const Sync_tokens = await prisma.sync_tokens.create({
     *   data: {
     *     // ... data to create a Sync_tokens
     *   }
     * })
     * 
     */
    create<T extends sync_tokensCreateArgs>(args: SelectSubset<T, sync_tokensCreateArgs<ExtArgs>>): Prisma__sync_tokensClient<$Result.GetResult<Prisma.$sync_tokensPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sync_tokens.
     * @param {sync_tokensCreateManyArgs} args - Arguments to create many Sync_tokens.
     * @example
     * // Create many Sync_tokens
     * const sync_tokens = await prisma.sync_tokens.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sync_tokensCreateManyArgs>(args?: SelectSubset<T, sync_tokensCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sync_tokens and returns the data saved in the database.
     * @param {sync_tokensCreateManyAndReturnArgs} args - Arguments to create many Sync_tokens.
     * @example
     * // Create many Sync_tokens
     * const sync_tokens = await prisma.sync_tokens.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sync_tokens and only return the `id`
     * const sync_tokensWithIdOnly = await prisma.sync_tokens.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends sync_tokensCreateManyAndReturnArgs>(args?: SelectSubset<T, sync_tokensCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sync_tokensPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sync_tokens.
     * @param {sync_tokensDeleteArgs} args - Arguments to delete one Sync_tokens.
     * @example
     * // Delete one Sync_tokens
     * const Sync_tokens = await prisma.sync_tokens.delete({
     *   where: {
     *     // ... filter to delete one Sync_tokens
     *   }
     * })
     * 
     */
    delete<T extends sync_tokensDeleteArgs>(args: SelectSubset<T, sync_tokensDeleteArgs<ExtArgs>>): Prisma__sync_tokensClient<$Result.GetResult<Prisma.$sync_tokensPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sync_tokens.
     * @param {sync_tokensUpdateArgs} args - Arguments to update one Sync_tokens.
     * @example
     * // Update one Sync_tokens
     * const sync_tokens = await prisma.sync_tokens.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sync_tokensUpdateArgs>(args: SelectSubset<T, sync_tokensUpdateArgs<ExtArgs>>): Prisma__sync_tokensClient<$Result.GetResult<Prisma.$sync_tokensPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sync_tokens.
     * @param {sync_tokensDeleteManyArgs} args - Arguments to filter Sync_tokens to delete.
     * @example
     * // Delete a few Sync_tokens
     * const { count } = await prisma.sync_tokens.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sync_tokensDeleteManyArgs>(args?: SelectSubset<T, sync_tokensDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sync_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sync_tokensUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sync_tokens
     * const sync_tokens = await prisma.sync_tokens.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sync_tokensUpdateManyArgs>(args: SelectSubset<T, sync_tokensUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sync_tokens and returns the data updated in the database.
     * @param {sync_tokensUpdateManyAndReturnArgs} args - Arguments to update many Sync_tokens.
     * @example
     * // Update many Sync_tokens
     * const sync_tokens = await prisma.sync_tokens.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sync_tokens and only return the `id`
     * const sync_tokensWithIdOnly = await prisma.sync_tokens.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends sync_tokensUpdateManyAndReturnArgs>(args: SelectSubset<T, sync_tokensUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sync_tokensPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sync_tokens.
     * @param {sync_tokensUpsertArgs} args - Arguments to update or create a Sync_tokens.
     * @example
     * // Update or create a Sync_tokens
     * const sync_tokens = await prisma.sync_tokens.upsert({
     *   create: {
     *     // ... data to create a Sync_tokens
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sync_tokens we want to update
     *   }
     * })
     */
    upsert<T extends sync_tokensUpsertArgs>(args: SelectSubset<T, sync_tokensUpsertArgs<ExtArgs>>): Prisma__sync_tokensClient<$Result.GetResult<Prisma.$sync_tokensPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sync_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sync_tokensCountArgs} args - Arguments to filter Sync_tokens to count.
     * @example
     * // Count the number of Sync_tokens
     * const count = await prisma.sync_tokens.count({
     *   where: {
     *     // ... the filter for the Sync_tokens we want to count
     *   }
     * })
    **/
    count<T extends sync_tokensCountArgs>(
      args?: Subset<T, sync_tokensCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Sync_tokensCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sync_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sync_tokensAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Sync_tokensAggregateArgs>(args: Subset<T, Sync_tokensAggregateArgs>): Prisma.PrismaPromise<GetSync_tokensAggregateType<T>>

    /**
     * Group by Sync_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sync_tokensGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sync_tokensGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sync_tokensGroupByArgs['orderBy'] }
        : { orderBy?: sync_tokensGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sync_tokensGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSync_tokensGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sync_tokens model
   */
  readonly fields: sync_tokensFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sync_tokens.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sync_tokensClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sync_tokens model
   */
  interface sync_tokensFieldRefs {
    readonly id: FieldRef<"sync_tokens", 'Int'>
    readonly name: FieldRef<"sync_tokens", 'String'>
    readonly token: FieldRef<"sync_tokens", 'String'>
    readonly userId: FieldRef<"sync_tokens", 'Int'>
    readonly createdAt: FieldRef<"sync_tokens", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * sync_tokens findUnique
   */
  export type sync_tokensFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sync_tokens
     */
    select?: sync_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sync_tokens
     */
    omit?: sync_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sync_tokensInclude<ExtArgs> | null
    /**
     * Filter, which sync_tokens to fetch.
     */
    where: sync_tokensWhereUniqueInput
  }

  /**
   * sync_tokens findUniqueOrThrow
   */
  export type sync_tokensFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sync_tokens
     */
    select?: sync_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sync_tokens
     */
    omit?: sync_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sync_tokensInclude<ExtArgs> | null
    /**
     * Filter, which sync_tokens to fetch.
     */
    where: sync_tokensWhereUniqueInput
  }

  /**
   * sync_tokens findFirst
   */
  export type sync_tokensFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sync_tokens
     */
    select?: sync_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sync_tokens
     */
    omit?: sync_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sync_tokensInclude<ExtArgs> | null
    /**
     * Filter, which sync_tokens to fetch.
     */
    where?: sync_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sync_tokens to fetch.
     */
    orderBy?: sync_tokensOrderByWithRelationInput | sync_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sync_tokens.
     */
    cursor?: sync_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sync_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sync_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sync_tokens.
     */
    distinct?: Sync_tokensScalarFieldEnum | Sync_tokensScalarFieldEnum[]
  }

  /**
   * sync_tokens findFirstOrThrow
   */
  export type sync_tokensFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sync_tokens
     */
    select?: sync_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sync_tokens
     */
    omit?: sync_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sync_tokensInclude<ExtArgs> | null
    /**
     * Filter, which sync_tokens to fetch.
     */
    where?: sync_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sync_tokens to fetch.
     */
    orderBy?: sync_tokensOrderByWithRelationInput | sync_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sync_tokens.
     */
    cursor?: sync_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sync_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sync_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sync_tokens.
     */
    distinct?: Sync_tokensScalarFieldEnum | Sync_tokensScalarFieldEnum[]
  }

  /**
   * sync_tokens findMany
   */
  export type sync_tokensFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sync_tokens
     */
    select?: sync_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sync_tokens
     */
    omit?: sync_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sync_tokensInclude<ExtArgs> | null
    /**
     * Filter, which sync_tokens to fetch.
     */
    where?: sync_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sync_tokens to fetch.
     */
    orderBy?: sync_tokensOrderByWithRelationInput | sync_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sync_tokens.
     */
    cursor?: sync_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sync_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sync_tokens.
     */
    skip?: number
    distinct?: Sync_tokensScalarFieldEnum | Sync_tokensScalarFieldEnum[]
  }

  /**
   * sync_tokens create
   */
  export type sync_tokensCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sync_tokens
     */
    select?: sync_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sync_tokens
     */
    omit?: sync_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sync_tokensInclude<ExtArgs> | null
    /**
     * The data needed to create a sync_tokens.
     */
    data: XOR<sync_tokensCreateInput, sync_tokensUncheckedCreateInput>
  }

  /**
   * sync_tokens createMany
   */
  export type sync_tokensCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sync_tokens.
     */
    data: sync_tokensCreateManyInput | sync_tokensCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sync_tokens createManyAndReturn
   */
  export type sync_tokensCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sync_tokens
     */
    select?: sync_tokensSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sync_tokens
     */
    omit?: sync_tokensOmit<ExtArgs> | null
    /**
     * The data used to create many sync_tokens.
     */
    data: sync_tokensCreateManyInput | sync_tokensCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sync_tokensIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * sync_tokens update
   */
  export type sync_tokensUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sync_tokens
     */
    select?: sync_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sync_tokens
     */
    omit?: sync_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sync_tokensInclude<ExtArgs> | null
    /**
     * The data needed to update a sync_tokens.
     */
    data: XOR<sync_tokensUpdateInput, sync_tokensUncheckedUpdateInput>
    /**
     * Choose, which sync_tokens to update.
     */
    where: sync_tokensWhereUniqueInput
  }

  /**
   * sync_tokens updateMany
   */
  export type sync_tokensUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sync_tokens.
     */
    data: XOR<sync_tokensUpdateManyMutationInput, sync_tokensUncheckedUpdateManyInput>
    /**
     * Filter which sync_tokens to update
     */
    where?: sync_tokensWhereInput
    /**
     * Limit how many sync_tokens to update.
     */
    limit?: number
  }

  /**
   * sync_tokens updateManyAndReturn
   */
  export type sync_tokensUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sync_tokens
     */
    select?: sync_tokensSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sync_tokens
     */
    omit?: sync_tokensOmit<ExtArgs> | null
    /**
     * The data used to update sync_tokens.
     */
    data: XOR<sync_tokensUpdateManyMutationInput, sync_tokensUncheckedUpdateManyInput>
    /**
     * Filter which sync_tokens to update
     */
    where?: sync_tokensWhereInput
    /**
     * Limit how many sync_tokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sync_tokensIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * sync_tokens upsert
   */
  export type sync_tokensUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sync_tokens
     */
    select?: sync_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sync_tokens
     */
    omit?: sync_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sync_tokensInclude<ExtArgs> | null
    /**
     * The filter to search for the sync_tokens to update in case it exists.
     */
    where: sync_tokensWhereUniqueInput
    /**
     * In case the sync_tokens found by the `where` argument doesn't exist, create a new sync_tokens with this data.
     */
    create: XOR<sync_tokensCreateInput, sync_tokensUncheckedCreateInput>
    /**
     * In case the sync_tokens was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sync_tokensUpdateInput, sync_tokensUncheckedUpdateInput>
  }

  /**
   * sync_tokens delete
   */
  export type sync_tokensDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sync_tokens
     */
    select?: sync_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sync_tokens
     */
    omit?: sync_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sync_tokensInclude<ExtArgs> | null
    /**
     * Filter which sync_tokens to delete.
     */
    where: sync_tokensWhereUniqueInput
  }

  /**
   * sync_tokens deleteMany
   */
  export type sync_tokensDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sync_tokens to delete
     */
    where?: sync_tokensWhereInput
    /**
     * Limit how many sync_tokens to delete.
     */
    limit?: number
  }

  /**
   * sync_tokens without action
   */
  export type sync_tokensDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sync_tokens
     */
    select?: sync_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sync_tokens
     */
    omit?: sync_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sync_tokensInclude<ExtArgs> | null
  }


  /**
   * Model job_offers
   */

  export type AggregateJob_offers = {
    _count: Job_offersCountAggregateOutputType | null
    _avg: Job_offersAvgAggregateOutputType | null
    _sum: Job_offersSumAggregateOutputType | null
    _min: Job_offersMinAggregateOutputType | null
    _max: Job_offersMaxAggregateOutputType | null
  }

  export type Job_offersAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    interviews: number | null
  }

  export type Job_offersSumAggregateOutputType = {
    id: number | null
    userId: number | null
    interviews: number | null
  }

  export type Job_offersMinAggregateOutputType = {
    id: number | null
    userId: number | null
    companyName: string | null
    position: string | null
    salary: string | null
    jobType: string | null
    source: string | null
    interviews: number | null
    fileURL: string | null
    receivedAt: Date | null
    startAt: Date | null
    createdAt: Date | null
  }

  export type Job_offersMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    companyName: string | null
    position: string | null
    salary: string | null
    jobType: string | null
    source: string | null
    interviews: number | null
    fileURL: string | null
    receivedAt: Date | null
    startAt: Date | null
    createdAt: Date | null
  }

  export type Job_offersCountAggregateOutputType = {
    id: number
    userId: number
    companyName: number
    position: number
    salary: number
    jobType: number
    source: number
    interviews: number
    fileURL: number
    receivedAt: number
    startAt: number
    createdAt: number
    _all: number
  }


  export type Job_offersAvgAggregateInputType = {
    id?: true
    userId?: true
    interviews?: true
  }

  export type Job_offersSumAggregateInputType = {
    id?: true
    userId?: true
    interviews?: true
  }

  export type Job_offersMinAggregateInputType = {
    id?: true
    userId?: true
    companyName?: true
    position?: true
    salary?: true
    jobType?: true
    source?: true
    interviews?: true
    fileURL?: true
    receivedAt?: true
    startAt?: true
    createdAt?: true
  }

  export type Job_offersMaxAggregateInputType = {
    id?: true
    userId?: true
    companyName?: true
    position?: true
    salary?: true
    jobType?: true
    source?: true
    interviews?: true
    fileURL?: true
    receivedAt?: true
    startAt?: true
    createdAt?: true
  }

  export type Job_offersCountAggregateInputType = {
    id?: true
    userId?: true
    companyName?: true
    position?: true
    salary?: true
    jobType?: true
    source?: true
    interviews?: true
    fileURL?: true
    receivedAt?: true
    startAt?: true
    createdAt?: true
    _all?: true
  }

  export type Job_offersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which job_offers to aggregate.
     */
    where?: job_offersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of job_offers to fetch.
     */
    orderBy?: job_offersOrderByWithRelationInput | job_offersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: job_offersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` job_offers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` job_offers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned job_offers
    **/
    _count?: true | Job_offersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Job_offersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Job_offersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Job_offersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Job_offersMaxAggregateInputType
  }

  export type GetJob_offersAggregateType<T extends Job_offersAggregateArgs> = {
        [P in keyof T & keyof AggregateJob_offers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJob_offers[P]>
      : GetScalarType<T[P], AggregateJob_offers[P]>
  }




  export type job_offersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: job_offersWhereInput
    orderBy?: job_offersOrderByWithAggregationInput | job_offersOrderByWithAggregationInput[]
    by: Job_offersScalarFieldEnum[] | Job_offersScalarFieldEnum
    having?: job_offersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Job_offersCountAggregateInputType | true
    _avg?: Job_offersAvgAggregateInputType
    _sum?: Job_offersSumAggregateInputType
    _min?: Job_offersMinAggregateInputType
    _max?: Job_offersMaxAggregateInputType
  }

  export type Job_offersGroupByOutputType = {
    id: number
    userId: number
    companyName: string
    position: string
    salary: string
    jobType: string
    source: string
    interviews: number
    fileURL: string
    receivedAt: Date
    startAt: Date | null
    createdAt: Date
    _count: Job_offersCountAggregateOutputType | null
    _avg: Job_offersAvgAggregateOutputType | null
    _sum: Job_offersSumAggregateOutputType | null
    _min: Job_offersMinAggregateOutputType | null
    _max: Job_offersMaxAggregateOutputType | null
  }

  type GetJob_offersGroupByPayload<T extends job_offersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Job_offersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Job_offersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Job_offersGroupByOutputType[P]>
            : GetScalarType<T[P], Job_offersGroupByOutputType[P]>
        }
      >
    >


  export type job_offersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    companyName?: boolean
    position?: boolean
    salary?: boolean
    jobType?: boolean
    source?: boolean
    interviews?: boolean
    fileURL?: boolean
    receivedAt?: boolean
    startAt?: boolean
    createdAt?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["job_offers"]>

  export type job_offersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    companyName?: boolean
    position?: boolean
    salary?: boolean
    jobType?: boolean
    source?: boolean
    interviews?: boolean
    fileURL?: boolean
    receivedAt?: boolean
    startAt?: boolean
    createdAt?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["job_offers"]>

  export type job_offersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    companyName?: boolean
    position?: boolean
    salary?: boolean
    jobType?: boolean
    source?: boolean
    interviews?: boolean
    fileURL?: boolean
    receivedAt?: boolean
    startAt?: boolean
    createdAt?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["job_offers"]>

  export type job_offersSelectScalar = {
    id?: boolean
    userId?: boolean
    companyName?: boolean
    position?: boolean
    salary?: boolean
    jobType?: boolean
    source?: boolean
    interviews?: boolean
    fileURL?: boolean
    receivedAt?: boolean
    startAt?: boolean
    createdAt?: boolean
  }

  export type job_offersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "companyName" | "position" | "salary" | "jobType" | "source" | "interviews" | "fileURL" | "receivedAt" | "startAt" | "createdAt", ExtArgs["result"]["job_offers"]>
  export type job_offersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type job_offersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type job_offersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $job_offersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "job_offers"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      companyName: string
      position: string
      salary: string
      jobType: string
      source: string
      interviews: number
      fileURL: string
      receivedAt: Date
      startAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["job_offers"]>
    composites: {}
  }

  type job_offersGetPayload<S extends boolean | null | undefined | job_offersDefaultArgs> = $Result.GetResult<Prisma.$job_offersPayload, S>

  type job_offersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<job_offersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Job_offersCountAggregateInputType | true
    }

  export interface job_offersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['job_offers'], meta: { name: 'job_offers' } }
    /**
     * Find zero or one Job_offers that matches the filter.
     * @param {job_offersFindUniqueArgs} args - Arguments to find a Job_offers
     * @example
     * // Get one Job_offers
     * const job_offers = await prisma.job_offers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends job_offersFindUniqueArgs>(args: SelectSubset<T, job_offersFindUniqueArgs<ExtArgs>>): Prisma__job_offersClient<$Result.GetResult<Prisma.$job_offersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Job_offers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {job_offersFindUniqueOrThrowArgs} args - Arguments to find a Job_offers
     * @example
     * // Get one Job_offers
     * const job_offers = await prisma.job_offers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends job_offersFindUniqueOrThrowArgs>(args: SelectSubset<T, job_offersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__job_offersClient<$Result.GetResult<Prisma.$job_offersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Job_offers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_offersFindFirstArgs} args - Arguments to find a Job_offers
     * @example
     * // Get one Job_offers
     * const job_offers = await prisma.job_offers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends job_offersFindFirstArgs>(args?: SelectSubset<T, job_offersFindFirstArgs<ExtArgs>>): Prisma__job_offersClient<$Result.GetResult<Prisma.$job_offersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Job_offers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_offersFindFirstOrThrowArgs} args - Arguments to find a Job_offers
     * @example
     * // Get one Job_offers
     * const job_offers = await prisma.job_offers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends job_offersFindFirstOrThrowArgs>(args?: SelectSubset<T, job_offersFindFirstOrThrowArgs<ExtArgs>>): Prisma__job_offersClient<$Result.GetResult<Prisma.$job_offersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Job_offers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_offersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Job_offers
     * const job_offers = await prisma.job_offers.findMany()
     * 
     * // Get first 10 Job_offers
     * const job_offers = await prisma.job_offers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const job_offersWithIdOnly = await prisma.job_offers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends job_offersFindManyArgs>(args?: SelectSubset<T, job_offersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$job_offersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Job_offers.
     * @param {job_offersCreateArgs} args - Arguments to create a Job_offers.
     * @example
     * // Create one Job_offers
     * const Job_offers = await prisma.job_offers.create({
     *   data: {
     *     // ... data to create a Job_offers
     *   }
     * })
     * 
     */
    create<T extends job_offersCreateArgs>(args: SelectSubset<T, job_offersCreateArgs<ExtArgs>>): Prisma__job_offersClient<$Result.GetResult<Prisma.$job_offersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Job_offers.
     * @param {job_offersCreateManyArgs} args - Arguments to create many Job_offers.
     * @example
     * // Create many Job_offers
     * const job_offers = await prisma.job_offers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends job_offersCreateManyArgs>(args?: SelectSubset<T, job_offersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Job_offers and returns the data saved in the database.
     * @param {job_offersCreateManyAndReturnArgs} args - Arguments to create many Job_offers.
     * @example
     * // Create many Job_offers
     * const job_offers = await prisma.job_offers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Job_offers and only return the `id`
     * const job_offersWithIdOnly = await prisma.job_offers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends job_offersCreateManyAndReturnArgs>(args?: SelectSubset<T, job_offersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$job_offersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Job_offers.
     * @param {job_offersDeleteArgs} args - Arguments to delete one Job_offers.
     * @example
     * // Delete one Job_offers
     * const Job_offers = await prisma.job_offers.delete({
     *   where: {
     *     // ... filter to delete one Job_offers
     *   }
     * })
     * 
     */
    delete<T extends job_offersDeleteArgs>(args: SelectSubset<T, job_offersDeleteArgs<ExtArgs>>): Prisma__job_offersClient<$Result.GetResult<Prisma.$job_offersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Job_offers.
     * @param {job_offersUpdateArgs} args - Arguments to update one Job_offers.
     * @example
     * // Update one Job_offers
     * const job_offers = await prisma.job_offers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends job_offersUpdateArgs>(args: SelectSubset<T, job_offersUpdateArgs<ExtArgs>>): Prisma__job_offersClient<$Result.GetResult<Prisma.$job_offersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Job_offers.
     * @param {job_offersDeleteManyArgs} args - Arguments to filter Job_offers to delete.
     * @example
     * // Delete a few Job_offers
     * const { count } = await prisma.job_offers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends job_offersDeleteManyArgs>(args?: SelectSubset<T, job_offersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Job_offers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_offersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Job_offers
     * const job_offers = await prisma.job_offers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends job_offersUpdateManyArgs>(args: SelectSubset<T, job_offersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Job_offers and returns the data updated in the database.
     * @param {job_offersUpdateManyAndReturnArgs} args - Arguments to update many Job_offers.
     * @example
     * // Update many Job_offers
     * const job_offers = await prisma.job_offers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Job_offers and only return the `id`
     * const job_offersWithIdOnly = await prisma.job_offers.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends job_offersUpdateManyAndReturnArgs>(args: SelectSubset<T, job_offersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$job_offersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Job_offers.
     * @param {job_offersUpsertArgs} args - Arguments to update or create a Job_offers.
     * @example
     * // Update or create a Job_offers
     * const job_offers = await prisma.job_offers.upsert({
     *   create: {
     *     // ... data to create a Job_offers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Job_offers we want to update
     *   }
     * })
     */
    upsert<T extends job_offersUpsertArgs>(args: SelectSubset<T, job_offersUpsertArgs<ExtArgs>>): Prisma__job_offersClient<$Result.GetResult<Prisma.$job_offersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Job_offers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_offersCountArgs} args - Arguments to filter Job_offers to count.
     * @example
     * // Count the number of Job_offers
     * const count = await prisma.job_offers.count({
     *   where: {
     *     // ... the filter for the Job_offers we want to count
     *   }
     * })
    **/
    count<T extends job_offersCountArgs>(
      args?: Subset<T, job_offersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Job_offersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Job_offers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Job_offersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Job_offersAggregateArgs>(args: Subset<T, Job_offersAggregateArgs>): Prisma.PrismaPromise<GetJob_offersAggregateType<T>>

    /**
     * Group by Job_offers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_offersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends job_offersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: job_offersGroupByArgs['orderBy'] }
        : { orderBy?: job_offersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, job_offersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJob_offersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the job_offers model
   */
  readonly fields: job_offersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for job_offers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__job_offersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the job_offers model
   */
  interface job_offersFieldRefs {
    readonly id: FieldRef<"job_offers", 'Int'>
    readonly userId: FieldRef<"job_offers", 'Int'>
    readonly companyName: FieldRef<"job_offers", 'String'>
    readonly position: FieldRef<"job_offers", 'String'>
    readonly salary: FieldRef<"job_offers", 'String'>
    readonly jobType: FieldRef<"job_offers", 'String'>
    readonly source: FieldRef<"job_offers", 'String'>
    readonly interviews: FieldRef<"job_offers", 'Int'>
    readonly fileURL: FieldRef<"job_offers", 'String'>
    readonly receivedAt: FieldRef<"job_offers", 'DateTime'>
    readonly startAt: FieldRef<"job_offers", 'DateTime'>
    readonly createdAt: FieldRef<"job_offers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * job_offers findUnique
   */
  export type job_offersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_offers
     */
    select?: job_offersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_offers
     */
    omit?: job_offersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_offersInclude<ExtArgs> | null
    /**
     * Filter, which job_offers to fetch.
     */
    where: job_offersWhereUniqueInput
  }

  /**
   * job_offers findUniqueOrThrow
   */
  export type job_offersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_offers
     */
    select?: job_offersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_offers
     */
    omit?: job_offersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_offersInclude<ExtArgs> | null
    /**
     * Filter, which job_offers to fetch.
     */
    where: job_offersWhereUniqueInput
  }

  /**
   * job_offers findFirst
   */
  export type job_offersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_offers
     */
    select?: job_offersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_offers
     */
    omit?: job_offersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_offersInclude<ExtArgs> | null
    /**
     * Filter, which job_offers to fetch.
     */
    where?: job_offersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of job_offers to fetch.
     */
    orderBy?: job_offersOrderByWithRelationInput | job_offersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for job_offers.
     */
    cursor?: job_offersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` job_offers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` job_offers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of job_offers.
     */
    distinct?: Job_offersScalarFieldEnum | Job_offersScalarFieldEnum[]
  }

  /**
   * job_offers findFirstOrThrow
   */
  export type job_offersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_offers
     */
    select?: job_offersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_offers
     */
    omit?: job_offersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_offersInclude<ExtArgs> | null
    /**
     * Filter, which job_offers to fetch.
     */
    where?: job_offersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of job_offers to fetch.
     */
    orderBy?: job_offersOrderByWithRelationInput | job_offersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for job_offers.
     */
    cursor?: job_offersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` job_offers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` job_offers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of job_offers.
     */
    distinct?: Job_offersScalarFieldEnum | Job_offersScalarFieldEnum[]
  }

  /**
   * job_offers findMany
   */
  export type job_offersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_offers
     */
    select?: job_offersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_offers
     */
    omit?: job_offersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_offersInclude<ExtArgs> | null
    /**
     * Filter, which job_offers to fetch.
     */
    where?: job_offersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of job_offers to fetch.
     */
    orderBy?: job_offersOrderByWithRelationInput | job_offersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing job_offers.
     */
    cursor?: job_offersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` job_offers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` job_offers.
     */
    skip?: number
    distinct?: Job_offersScalarFieldEnum | Job_offersScalarFieldEnum[]
  }

  /**
   * job_offers create
   */
  export type job_offersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_offers
     */
    select?: job_offersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_offers
     */
    omit?: job_offersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_offersInclude<ExtArgs> | null
    /**
     * The data needed to create a job_offers.
     */
    data: XOR<job_offersCreateInput, job_offersUncheckedCreateInput>
  }

  /**
   * job_offers createMany
   */
  export type job_offersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many job_offers.
     */
    data: job_offersCreateManyInput | job_offersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * job_offers createManyAndReturn
   */
  export type job_offersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_offers
     */
    select?: job_offersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the job_offers
     */
    omit?: job_offersOmit<ExtArgs> | null
    /**
     * The data used to create many job_offers.
     */
    data: job_offersCreateManyInput | job_offersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_offersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * job_offers update
   */
  export type job_offersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_offers
     */
    select?: job_offersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_offers
     */
    omit?: job_offersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_offersInclude<ExtArgs> | null
    /**
     * The data needed to update a job_offers.
     */
    data: XOR<job_offersUpdateInput, job_offersUncheckedUpdateInput>
    /**
     * Choose, which job_offers to update.
     */
    where: job_offersWhereUniqueInput
  }

  /**
   * job_offers updateMany
   */
  export type job_offersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update job_offers.
     */
    data: XOR<job_offersUpdateManyMutationInput, job_offersUncheckedUpdateManyInput>
    /**
     * Filter which job_offers to update
     */
    where?: job_offersWhereInput
    /**
     * Limit how many job_offers to update.
     */
    limit?: number
  }

  /**
   * job_offers updateManyAndReturn
   */
  export type job_offersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_offers
     */
    select?: job_offersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the job_offers
     */
    omit?: job_offersOmit<ExtArgs> | null
    /**
     * The data used to update job_offers.
     */
    data: XOR<job_offersUpdateManyMutationInput, job_offersUncheckedUpdateManyInput>
    /**
     * Filter which job_offers to update
     */
    where?: job_offersWhereInput
    /**
     * Limit how many job_offers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_offersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * job_offers upsert
   */
  export type job_offersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_offers
     */
    select?: job_offersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_offers
     */
    omit?: job_offersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_offersInclude<ExtArgs> | null
    /**
     * The filter to search for the job_offers to update in case it exists.
     */
    where: job_offersWhereUniqueInput
    /**
     * In case the job_offers found by the `where` argument doesn't exist, create a new job_offers with this data.
     */
    create: XOR<job_offersCreateInput, job_offersUncheckedCreateInput>
    /**
     * In case the job_offers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<job_offersUpdateInput, job_offersUncheckedUpdateInput>
  }

  /**
   * job_offers delete
   */
  export type job_offersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_offers
     */
    select?: job_offersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_offers
     */
    omit?: job_offersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_offersInclude<ExtArgs> | null
    /**
     * Filter which job_offers to delete.
     */
    where: job_offersWhereUniqueInput
  }

  /**
   * job_offers deleteMany
   */
  export type job_offersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which job_offers to delete
     */
    where?: job_offersWhereInput
    /**
     * Limit how many job_offers to delete.
     */
    limit?: number
  }

  /**
   * job_offers without action
   */
  export type job_offersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_offers
     */
    select?: job_offersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_offers
     */
    omit?: job_offersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_offersInclude<ExtArgs> | null
  }


  /**
   * Model job_applications
   */

  export type AggregateJob_applications = {
    _count: Job_applicationsCountAggregateOutputType | null
    _avg: Job_applicationsAvgAggregateOutputType | null
    _sum: Job_applicationsSumAggregateOutputType | null
    _min: Job_applicationsMinAggregateOutputType | null
    _max: Job_applicationsMaxAggregateOutputType | null
  }

  export type Job_applicationsAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type Job_applicationsSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type Job_applicationsMinAggregateOutputType = {
    id: number | null
    userId: number | null
    companyName: string | null
    position: string | null
    createdAt: Date | null
  }

  export type Job_applicationsMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    companyName: string | null
    position: string | null
    createdAt: Date | null
  }

  export type Job_applicationsCountAggregateOutputType = {
    id: number
    userId: number
    companyName: number
    position: number
    createdAt: number
    _all: number
  }


  export type Job_applicationsAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type Job_applicationsSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type Job_applicationsMinAggregateInputType = {
    id?: true
    userId?: true
    companyName?: true
    position?: true
    createdAt?: true
  }

  export type Job_applicationsMaxAggregateInputType = {
    id?: true
    userId?: true
    companyName?: true
    position?: true
    createdAt?: true
  }

  export type Job_applicationsCountAggregateInputType = {
    id?: true
    userId?: true
    companyName?: true
    position?: true
    createdAt?: true
    _all?: true
  }

  export type Job_applicationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which job_applications to aggregate.
     */
    where?: job_applicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of job_applications to fetch.
     */
    orderBy?: job_applicationsOrderByWithRelationInput | job_applicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: job_applicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` job_applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` job_applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned job_applications
    **/
    _count?: true | Job_applicationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Job_applicationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Job_applicationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Job_applicationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Job_applicationsMaxAggregateInputType
  }

  export type GetJob_applicationsAggregateType<T extends Job_applicationsAggregateArgs> = {
        [P in keyof T & keyof AggregateJob_applications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJob_applications[P]>
      : GetScalarType<T[P], AggregateJob_applications[P]>
  }




  export type job_applicationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: job_applicationsWhereInput
    orderBy?: job_applicationsOrderByWithAggregationInput | job_applicationsOrderByWithAggregationInput[]
    by: Job_applicationsScalarFieldEnum[] | Job_applicationsScalarFieldEnum
    having?: job_applicationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Job_applicationsCountAggregateInputType | true
    _avg?: Job_applicationsAvgAggregateInputType
    _sum?: Job_applicationsSumAggregateInputType
    _min?: Job_applicationsMinAggregateInputType
    _max?: Job_applicationsMaxAggregateInputType
  }

  export type Job_applicationsGroupByOutputType = {
    id: number
    userId: number
    companyName: string
    position: string
    createdAt: Date
    _count: Job_applicationsCountAggregateOutputType | null
    _avg: Job_applicationsAvgAggregateOutputType | null
    _sum: Job_applicationsSumAggregateOutputType | null
    _min: Job_applicationsMinAggregateOutputType | null
    _max: Job_applicationsMaxAggregateOutputType | null
  }

  type GetJob_applicationsGroupByPayload<T extends job_applicationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Job_applicationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Job_applicationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Job_applicationsGroupByOutputType[P]>
            : GetScalarType<T[P], Job_applicationsGroupByOutputType[P]>
        }
      >
    >


  export type job_applicationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    companyName?: boolean
    position?: boolean
    createdAt?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["job_applications"]>

  export type job_applicationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    companyName?: boolean
    position?: boolean
    createdAt?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["job_applications"]>

  export type job_applicationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    companyName?: boolean
    position?: boolean
    createdAt?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["job_applications"]>

  export type job_applicationsSelectScalar = {
    id?: boolean
    userId?: boolean
    companyName?: boolean
    position?: boolean
    createdAt?: boolean
  }

  export type job_applicationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "companyName" | "position" | "createdAt", ExtArgs["result"]["job_applications"]>
  export type job_applicationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type job_applicationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type job_applicationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $job_applicationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "job_applications"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      companyName: string
      position: string
      createdAt: Date
    }, ExtArgs["result"]["job_applications"]>
    composites: {}
  }

  type job_applicationsGetPayload<S extends boolean | null | undefined | job_applicationsDefaultArgs> = $Result.GetResult<Prisma.$job_applicationsPayload, S>

  type job_applicationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<job_applicationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Job_applicationsCountAggregateInputType | true
    }

  export interface job_applicationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['job_applications'], meta: { name: 'job_applications' } }
    /**
     * Find zero or one Job_applications that matches the filter.
     * @param {job_applicationsFindUniqueArgs} args - Arguments to find a Job_applications
     * @example
     * // Get one Job_applications
     * const job_applications = await prisma.job_applications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends job_applicationsFindUniqueArgs>(args: SelectSubset<T, job_applicationsFindUniqueArgs<ExtArgs>>): Prisma__job_applicationsClient<$Result.GetResult<Prisma.$job_applicationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Job_applications that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {job_applicationsFindUniqueOrThrowArgs} args - Arguments to find a Job_applications
     * @example
     * // Get one Job_applications
     * const job_applications = await prisma.job_applications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends job_applicationsFindUniqueOrThrowArgs>(args: SelectSubset<T, job_applicationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__job_applicationsClient<$Result.GetResult<Prisma.$job_applicationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Job_applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_applicationsFindFirstArgs} args - Arguments to find a Job_applications
     * @example
     * // Get one Job_applications
     * const job_applications = await prisma.job_applications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends job_applicationsFindFirstArgs>(args?: SelectSubset<T, job_applicationsFindFirstArgs<ExtArgs>>): Prisma__job_applicationsClient<$Result.GetResult<Prisma.$job_applicationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Job_applications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_applicationsFindFirstOrThrowArgs} args - Arguments to find a Job_applications
     * @example
     * // Get one Job_applications
     * const job_applications = await prisma.job_applications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends job_applicationsFindFirstOrThrowArgs>(args?: SelectSubset<T, job_applicationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__job_applicationsClient<$Result.GetResult<Prisma.$job_applicationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Job_applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_applicationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Job_applications
     * const job_applications = await prisma.job_applications.findMany()
     * 
     * // Get first 10 Job_applications
     * const job_applications = await prisma.job_applications.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const job_applicationsWithIdOnly = await prisma.job_applications.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends job_applicationsFindManyArgs>(args?: SelectSubset<T, job_applicationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$job_applicationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Job_applications.
     * @param {job_applicationsCreateArgs} args - Arguments to create a Job_applications.
     * @example
     * // Create one Job_applications
     * const Job_applications = await prisma.job_applications.create({
     *   data: {
     *     // ... data to create a Job_applications
     *   }
     * })
     * 
     */
    create<T extends job_applicationsCreateArgs>(args: SelectSubset<T, job_applicationsCreateArgs<ExtArgs>>): Prisma__job_applicationsClient<$Result.GetResult<Prisma.$job_applicationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Job_applications.
     * @param {job_applicationsCreateManyArgs} args - Arguments to create many Job_applications.
     * @example
     * // Create many Job_applications
     * const job_applications = await prisma.job_applications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends job_applicationsCreateManyArgs>(args?: SelectSubset<T, job_applicationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Job_applications and returns the data saved in the database.
     * @param {job_applicationsCreateManyAndReturnArgs} args - Arguments to create many Job_applications.
     * @example
     * // Create many Job_applications
     * const job_applications = await prisma.job_applications.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Job_applications and only return the `id`
     * const job_applicationsWithIdOnly = await prisma.job_applications.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends job_applicationsCreateManyAndReturnArgs>(args?: SelectSubset<T, job_applicationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$job_applicationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Job_applications.
     * @param {job_applicationsDeleteArgs} args - Arguments to delete one Job_applications.
     * @example
     * // Delete one Job_applications
     * const Job_applications = await prisma.job_applications.delete({
     *   where: {
     *     // ... filter to delete one Job_applications
     *   }
     * })
     * 
     */
    delete<T extends job_applicationsDeleteArgs>(args: SelectSubset<T, job_applicationsDeleteArgs<ExtArgs>>): Prisma__job_applicationsClient<$Result.GetResult<Prisma.$job_applicationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Job_applications.
     * @param {job_applicationsUpdateArgs} args - Arguments to update one Job_applications.
     * @example
     * // Update one Job_applications
     * const job_applications = await prisma.job_applications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends job_applicationsUpdateArgs>(args: SelectSubset<T, job_applicationsUpdateArgs<ExtArgs>>): Prisma__job_applicationsClient<$Result.GetResult<Prisma.$job_applicationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Job_applications.
     * @param {job_applicationsDeleteManyArgs} args - Arguments to filter Job_applications to delete.
     * @example
     * // Delete a few Job_applications
     * const { count } = await prisma.job_applications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends job_applicationsDeleteManyArgs>(args?: SelectSubset<T, job_applicationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Job_applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_applicationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Job_applications
     * const job_applications = await prisma.job_applications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends job_applicationsUpdateManyArgs>(args: SelectSubset<T, job_applicationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Job_applications and returns the data updated in the database.
     * @param {job_applicationsUpdateManyAndReturnArgs} args - Arguments to update many Job_applications.
     * @example
     * // Update many Job_applications
     * const job_applications = await prisma.job_applications.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Job_applications and only return the `id`
     * const job_applicationsWithIdOnly = await prisma.job_applications.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends job_applicationsUpdateManyAndReturnArgs>(args: SelectSubset<T, job_applicationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$job_applicationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Job_applications.
     * @param {job_applicationsUpsertArgs} args - Arguments to update or create a Job_applications.
     * @example
     * // Update or create a Job_applications
     * const job_applications = await prisma.job_applications.upsert({
     *   create: {
     *     // ... data to create a Job_applications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Job_applications we want to update
     *   }
     * })
     */
    upsert<T extends job_applicationsUpsertArgs>(args: SelectSubset<T, job_applicationsUpsertArgs<ExtArgs>>): Prisma__job_applicationsClient<$Result.GetResult<Prisma.$job_applicationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Job_applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_applicationsCountArgs} args - Arguments to filter Job_applications to count.
     * @example
     * // Count the number of Job_applications
     * const count = await prisma.job_applications.count({
     *   where: {
     *     // ... the filter for the Job_applications we want to count
     *   }
     * })
    **/
    count<T extends job_applicationsCountArgs>(
      args?: Subset<T, job_applicationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Job_applicationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Job_applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Job_applicationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Job_applicationsAggregateArgs>(args: Subset<T, Job_applicationsAggregateArgs>): Prisma.PrismaPromise<GetJob_applicationsAggregateType<T>>

    /**
     * Group by Job_applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_applicationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends job_applicationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: job_applicationsGroupByArgs['orderBy'] }
        : { orderBy?: job_applicationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, job_applicationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJob_applicationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the job_applications model
   */
  readonly fields: job_applicationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for job_applications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__job_applicationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the job_applications model
   */
  interface job_applicationsFieldRefs {
    readonly id: FieldRef<"job_applications", 'Int'>
    readonly userId: FieldRef<"job_applications", 'Int'>
    readonly companyName: FieldRef<"job_applications", 'String'>
    readonly position: FieldRef<"job_applications", 'String'>
    readonly createdAt: FieldRef<"job_applications", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * job_applications findUnique
   */
  export type job_applicationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_applications
     */
    select?: job_applicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_applications
     */
    omit?: job_applicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_applicationsInclude<ExtArgs> | null
    /**
     * Filter, which job_applications to fetch.
     */
    where: job_applicationsWhereUniqueInput
  }

  /**
   * job_applications findUniqueOrThrow
   */
  export type job_applicationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_applications
     */
    select?: job_applicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_applications
     */
    omit?: job_applicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_applicationsInclude<ExtArgs> | null
    /**
     * Filter, which job_applications to fetch.
     */
    where: job_applicationsWhereUniqueInput
  }

  /**
   * job_applications findFirst
   */
  export type job_applicationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_applications
     */
    select?: job_applicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_applications
     */
    omit?: job_applicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_applicationsInclude<ExtArgs> | null
    /**
     * Filter, which job_applications to fetch.
     */
    where?: job_applicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of job_applications to fetch.
     */
    orderBy?: job_applicationsOrderByWithRelationInput | job_applicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for job_applications.
     */
    cursor?: job_applicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` job_applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` job_applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of job_applications.
     */
    distinct?: Job_applicationsScalarFieldEnum | Job_applicationsScalarFieldEnum[]
  }

  /**
   * job_applications findFirstOrThrow
   */
  export type job_applicationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_applications
     */
    select?: job_applicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_applications
     */
    omit?: job_applicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_applicationsInclude<ExtArgs> | null
    /**
     * Filter, which job_applications to fetch.
     */
    where?: job_applicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of job_applications to fetch.
     */
    orderBy?: job_applicationsOrderByWithRelationInput | job_applicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for job_applications.
     */
    cursor?: job_applicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` job_applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` job_applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of job_applications.
     */
    distinct?: Job_applicationsScalarFieldEnum | Job_applicationsScalarFieldEnum[]
  }

  /**
   * job_applications findMany
   */
  export type job_applicationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_applications
     */
    select?: job_applicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_applications
     */
    omit?: job_applicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_applicationsInclude<ExtArgs> | null
    /**
     * Filter, which job_applications to fetch.
     */
    where?: job_applicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of job_applications to fetch.
     */
    orderBy?: job_applicationsOrderByWithRelationInput | job_applicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing job_applications.
     */
    cursor?: job_applicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` job_applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` job_applications.
     */
    skip?: number
    distinct?: Job_applicationsScalarFieldEnum | Job_applicationsScalarFieldEnum[]
  }

  /**
   * job_applications create
   */
  export type job_applicationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_applications
     */
    select?: job_applicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_applications
     */
    omit?: job_applicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_applicationsInclude<ExtArgs> | null
    /**
     * The data needed to create a job_applications.
     */
    data: XOR<job_applicationsCreateInput, job_applicationsUncheckedCreateInput>
  }

  /**
   * job_applications createMany
   */
  export type job_applicationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many job_applications.
     */
    data: job_applicationsCreateManyInput | job_applicationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * job_applications createManyAndReturn
   */
  export type job_applicationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_applications
     */
    select?: job_applicationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the job_applications
     */
    omit?: job_applicationsOmit<ExtArgs> | null
    /**
     * The data used to create many job_applications.
     */
    data: job_applicationsCreateManyInput | job_applicationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_applicationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * job_applications update
   */
  export type job_applicationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_applications
     */
    select?: job_applicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_applications
     */
    omit?: job_applicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_applicationsInclude<ExtArgs> | null
    /**
     * The data needed to update a job_applications.
     */
    data: XOR<job_applicationsUpdateInput, job_applicationsUncheckedUpdateInput>
    /**
     * Choose, which job_applications to update.
     */
    where: job_applicationsWhereUniqueInput
  }

  /**
   * job_applications updateMany
   */
  export type job_applicationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update job_applications.
     */
    data: XOR<job_applicationsUpdateManyMutationInput, job_applicationsUncheckedUpdateManyInput>
    /**
     * Filter which job_applications to update
     */
    where?: job_applicationsWhereInput
    /**
     * Limit how many job_applications to update.
     */
    limit?: number
  }

  /**
   * job_applications updateManyAndReturn
   */
  export type job_applicationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_applications
     */
    select?: job_applicationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the job_applications
     */
    omit?: job_applicationsOmit<ExtArgs> | null
    /**
     * The data used to update job_applications.
     */
    data: XOR<job_applicationsUpdateManyMutationInput, job_applicationsUncheckedUpdateManyInput>
    /**
     * Filter which job_applications to update
     */
    where?: job_applicationsWhereInput
    /**
     * Limit how many job_applications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_applicationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * job_applications upsert
   */
  export type job_applicationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_applications
     */
    select?: job_applicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_applications
     */
    omit?: job_applicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_applicationsInclude<ExtArgs> | null
    /**
     * The filter to search for the job_applications to update in case it exists.
     */
    where: job_applicationsWhereUniqueInput
    /**
     * In case the job_applications found by the `where` argument doesn't exist, create a new job_applications with this data.
     */
    create: XOR<job_applicationsCreateInput, job_applicationsUncheckedCreateInput>
    /**
     * In case the job_applications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<job_applicationsUpdateInput, job_applicationsUncheckedUpdateInput>
  }

  /**
   * job_applications delete
   */
  export type job_applicationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_applications
     */
    select?: job_applicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_applications
     */
    omit?: job_applicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_applicationsInclude<ExtArgs> | null
    /**
     * Filter which job_applications to delete.
     */
    where: job_applicationsWhereUniqueInput
  }

  /**
   * job_applications deleteMany
   */
  export type job_applicationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which job_applications to delete
     */
    where?: job_applicationsWhereInput
    /**
     * Limit how many job_applications to delete.
     */
    limit?: number
  }

  /**
   * job_applications without action
   */
  export type job_applicationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_applications
     */
    select?: job_applicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_applications
     */
    omit?: job_applicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_applicationsInclude<ExtArgs> | null
  }


  /**
   * Model jobs
   */

  export type AggregateJobs = {
    _count: JobsCountAggregateOutputType | null
    _avg: JobsAvgAggregateOutputType | null
    _sum: JobsSumAggregateOutputType | null
    _min: JobsMinAggregateOutputType | null
    _max: JobsMaxAggregateOutputType | null
  }

  export type JobsAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type JobsSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type JobsMinAggregateOutputType = {
    id: number | null
    userId: number | null
    companyName: string | null
    position: string | null
    isActive: boolean | null
    comments: string | null
    startedAt: Date | null
    createdAt: Date | null
  }

  export type JobsMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    companyName: string | null
    position: string | null
    isActive: boolean | null
    comments: string | null
    startedAt: Date | null
    createdAt: Date | null
  }

  export type JobsCountAggregateOutputType = {
    id: number
    userId: number
    companyName: number
    position: number
    isActive: number
    comments: number
    startedAt: number
    createdAt: number
    _all: number
  }


  export type JobsAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type JobsSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type JobsMinAggregateInputType = {
    id?: true
    userId?: true
    companyName?: true
    position?: true
    isActive?: true
    comments?: true
    startedAt?: true
    createdAt?: true
  }

  export type JobsMaxAggregateInputType = {
    id?: true
    userId?: true
    companyName?: true
    position?: true
    isActive?: true
    comments?: true
    startedAt?: true
    createdAt?: true
  }

  export type JobsCountAggregateInputType = {
    id?: true
    userId?: true
    companyName?: true
    position?: true
    isActive?: true
    comments?: true
    startedAt?: true
    createdAt?: true
    _all?: true
  }

  export type JobsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which jobs to aggregate.
     */
    where?: jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobsOrderByWithRelationInput | jobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned jobs
    **/
    _count?: true | JobsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobsMaxAggregateInputType
  }

  export type GetJobsAggregateType<T extends JobsAggregateArgs> = {
        [P in keyof T & keyof AggregateJobs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobs[P]>
      : GetScalarType<T[P], AggregateJobs[P]>
  }




  export type jobsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: jobsWhereInput
    orderBy?: jobsOrderByWithAggregationInput | jobsOrderByWithAggregationInput[]
    by: JobsScalarFieldEnum[] | JobsScalarFieldEnum
    having?: jobsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobsCountAggregateInputType | true
    _avg?: JobsAvgAggregateInputType
    _sum?: JobsSumAggregateInputType
    _min?: JobsMinAggregateInputType
    _max?: JobsMaxAggregateInputType
  }

  export type JobsGroupByOutputType = {
    id: number
    userId: number
    companyName: string
    position: string
    isActive: boolean
    comments: string | null
    startedAt: Date | null
    createdAt: Date
    _count: JobsCountAggregateOutputType | null
    _avg: JobsAvgAggregateOutputType | null
    _sum: JobsSumAggregateOutputType | null
    _min: JobsMinAggregateOutputType | null
    _max: JobsMaxAggregateOutputType | null
  }

  type GetJobsGroupByPayload<T extends jobsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobsGroupByOutputType[P]>
            : GetScalarType<T[P], JobsGroupByOutputType[P]>
        }
      >
    >


  export type jobsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    companyName?: boolean
    position?: boolean
    isActive?: boolean
    comments?: boolean
    startedAt?: boolean
    createdAt?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobs"]>

  export type jobsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    companyName?: boolean
    position?: boolean
    isActive?: boolean
    comments?: boolean
    startedAt?: boolean
    createdAt?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobs"]>

  export type jobsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    companyName?: boolean
    position?: boolean
    isActive?: boolean
    comments?: boolean
    startedAt?: boolean
    createdAt?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobs"]>

  export type jobsSelectScalar = {
    id?: boolean
    userId?: boolean
    companyName?: boolean
    position?: boolean
    isActive?: boolean
    comments?: boolean
    startedAt?: boolean
    createdAt?: boolean
  }

  export type jobsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "companyName" | "position" | "isActive" | "comments" | "startedAt" | "createdAt", ExtArgs["result"]["jobs"]>
  export type jobsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type jobsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type jobsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $jobsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "jobs"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      companyName: string
      position: string
      isActive: boolean
      comments: string | null
      startedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["jobs"]>
    composites: {}
  }

  type jobsGetPayload<S extends boolean | null | undefined | jobsDefaultArgs> = $Result.GetResult<Prisma.$jobsPayload, S>

  type jobsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<jobsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobsCountAggregateInputType | true
    }

  export interface jobsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['jobs'], meta: { name: 'jobs' } }
    /**
     * Find zero or one Jobs that matches the filter.
     * @param {jobsFindUniqueArgs} args - Arguments to find a Jobs
     * @example
     * // Get one Jobs
     * const jobs = await prisma.jobs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends jobsFindUniqueArgs>(args: SelectSubset<T, jobsFindUniqueArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Jobs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {jobsFindUniqueOrThrowArgs} args - Arguments to find a Jobs
     * @example
     * // Get one Jobs
     * const jobs = await prisma.jobs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends jobsFindUniqueOrThrowArgs>(args: SelectSubset<T, jobsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobsFindFirstArgs} args - Arguments to find a Jobs
     * @example
     * // Get one Jobs
     * const jobs = await prisma.jobs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends jobsFindFirstArgs>(args?: SelectSubset<T, jobsFindFirstArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jobs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobsFindFirstOrThrowArgs} args - Arguments to find a Jobs
     * @example
     * // Get one Jobs
     * const jobs = await prisma.jobs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends jobsFindFirstOrThrowArgs>(args?: SelectSubset<T, jobsFindFirstOrThrowArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jobs
     * const jobs = await prisma.jobs.findMany()
     * 
     * // Get first 10 Jobs
     * const jobs = await prisma.jobs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobsWithIdOnly = await prisma.jobs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends jobsFindManyArgs>(args?: SelectSubset<T, jobsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Jobs.
     * @param {jobsCreateArgs} args - Arguments to create a Jobs.
     * @example
     * // Create one Jobs
     * const Jobs = await prisma.jobs.create({
     *   data: {
     *     // ... data to create a Jobs
     *   }
     * })
     * 
     */
    create<T extends jobsCreateArgs>(args: SelectSubset<T, jobsCreateArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Jobs.
     * @param {jobsCreateManyArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const jobs = await prisma.jobs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends jobsCreateManyArgs>(args?: SelectSubset<T, jobsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Jobs and returns the data saved in the database.
     * @param {jobsCreateManyAndReturnArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const jobs = await prisma.jobs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Jobs and only return the `id`
     * const jobsWithIdOnly = await prisma.jobs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends jobsCreateManyAndReturnArgs>(args?: SelectSubset<T, jobsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Jobs.
     * @param {jobsDeleteArgs} args - Arguments to delete one Jobs.
     * @example
     * // Delete one Jobs
     * const Jobs = await prisma.jobs.delete({
     *   where: {
     *     // ... filter to delete one Jobs
     *   }
     * })
     * 
     */
    delete<T extends jobsDeleteArgs>(args: SelectSubset<T, jobsDeleteArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Jobs.
     * @param {jobsUpdateArgs} args - Arguments to update one Jobs.
     * @example
     * // Update one Jobs
     * const jobs = await prisma.jobs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends jobsUpdateArgs>(args: SelectSubset<T, jobsUpdateArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Jobs.
     * @param {jobsDeleteManyArgs} args - Arguments to filter Jobs to delete.
     * @example
     * // Delete a few Jobs
     * const { count } = await prisma.jobs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends jobsDeleteManyArgs>(args?: SelectSubset<T, jobsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jobs
     * const jobs = await prisma.jobs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends jobsUpdateManyArgs>(args: SelectSubset<T, jobsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs and returns the data updated in the database.
     * @param {jobsUpdateManyAndReturnArgs} args - Arguments to update many Jobs.
     * @example
     * // Update many Jobs
     * const jobs = await prisma.jobs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Jobs and only return the `id`
     * const jobsWithIdOnly = await prisma.jobs.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends jobsUpdateManyAndReturnArgs>(args: SelectSubset<T, jobsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Jobs.
     * @param {jobsUpsertArgs} args - Arguments to update or create a Jobs.
     * @example
     * // Update or create a Jobs
     * const jobs = await prisma.jobs.upsert({
     *   create: {
     *     // ... data to create a Jobs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jobs we want to update
     *   }
     * })
     */
    upsert<T extends jobsUpsertArgs>(args: SelectSubset<T, jobsUpsertArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobsCountArgs} args - Arguments to filter Jobs to count.
     * @example
     * // Count the number of Jobs
     * const count = await prisma.jobs.count({
     *   where: {
     *     // ... the filter for the Jobs we want to count
     *   }
     * })
    **/
    count<T extends jobsCountArgs>(
      args?: Subset<T, jobsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JobsAggregateArgs>(args: Subset<T, JobsAggregateArgs>): Prisma.PrismaPromise<GetJobsAggregateType<T>>

    /**
     * Group by Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends jobsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: jobsGroupByArgs['orderBy'] }
        : { orderBy?: jobsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, jobsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the jobs model
   */
  readonly fields: jobsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for jobs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__jobsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the jobs model
   */
  interface jobsFieldRefs {
    readonly id: FieldRef<"jobs", 'Int'>
    readonly userId: FieldRef<"jobs", 'Int'>
    readonly companyName: FieldRef<"jobs", 'String'>
    readonly position: FieldRef<"jobs", 'String'>
    readonly isActive: FieldRef<"jobs", 'Boolean'>
    readonly comments: FieldRef<"jobs", 'String'>
    readonly startedAt: FieldRef<"jobs", 'DateTime'>
    readonly createdAt: FieldRef<"jobs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * jobs findUnique
   */
  export type jobsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobsInclude<ExtArgs> | null
    /**
     * Filter, which jobs to fetch.
     */
    where: jobsWhereUniqueInput
  }

  /**
   * jobs findUniqueOrThrow
   */
  export type jobsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobsInclude<ExtArgs> | null
    /**
     * Filter, which jobs to fetch.
     */
    where: jobsWhereUniqueInput
  }

  /**
   * jobs findFirst
   */
  export type jobsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobsInclude<ExtArgs> | null
    /**
     * Filter, which jobs to fetch.
     */
    where?: jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobsOrderByWithRelationInput | jobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for jobs.
     */
    cursor?: jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of jobs.
     */
    distinct?: JobsScalarFieldEnum | JobsScalarFieldEnum[]
  }

  /**
   * jobs findFirstOrThrow
   */
  export type jobsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobsInclude<ExtArgs> | null
    /**
     * Filter, which jobs to fetch.
     */
    where?: jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobsOrderByWithRelationInput | jobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for jobs.
     */
    cursor?: jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of jobs.
     */
    distinct?: JobsScalarFieldEnum | JobsScalarFieldEnum[]
  }

  /**
   * jobs findMany
   */
  export type jobsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobsInclude<ExtArgs> | null
    /**
     * Filter, which jobs to fetch.
     */
    where?: jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobsOrderByWithRelationInput | jobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing jobs.
     */
    cursor?: jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobs.
     */
    skip?: number
    distinct?: JobsScalarFieldEnum | JobsScalarFieldEnum[]
  }

  /**
   * jobs create
   */
  export type jobsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobsInclude<ExtArgs> | null
    /**
     * The data needed to create a jobs.
     */
    data: XOR<jobsCreateInput, jobsUncheckedCreateInput>
  }

  /**
   * jobs createMany
   */
  export type jobsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many jobs.
     */
    data: jobsCreateManyInput | jobsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * jobs createManyAndReturn
   */
  export type jobsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * The data used to create many jobs.
     */
    data: jobsCreateManyInput | jobsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * jobs update
   */
  export type jobsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobsInclude<ExtArgs> | null
    /**
     * The data needed to update a jobs.
     */
    data: XOR<jobsUpdateInput, jobsUncheckedUpdateInput>
    /**
     * Choose, which jobs to update.
     */
    where: jobsWhereUniqueInput
  }

  /**
   * jobs updateMany
   */
  export type jobsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update jobs.
     */
    data: XOR<jobsUpdateManyMutationInput, jobsUncheckedUpdateManyInput>
    /**
     * Filter which jobs to update
     */
    where?: jobsWhereInput
    /**
     * Limit how many jobs to update.
     */
    limit?: number
  }

  /**
   * jobs updateManyAndReturn
   */
  export type jobsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * The data used to update jobs.
     */
    data: XOR<jobsUpdateManyMutationInput, jobsUncheckedUpdateManyInput>
    /**
     * Filter which jobs to update
     */
    where?: jobsWhereInput
    /**
     * Limit how many jobs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * jobs upsert
   */
  export type jobsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobsInclude<ExtArgs> | null
    /**
     * The filter to search for the jobs to update in case it exists.
     */
    where: jobsWhereUniqueInput
    /**
     * In case the jobs found by the `where` argument doesn't exist, create a new jobs with this data.
     */
    create: XOR<jobsCreateInput, jobsUncheckedCreateInput>
    /**
     * In case the jobs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<jobsUpdateInput, jobsUncheckedUpdateInput>
  }

  /**
   * jobs delete
   */
  export type jobsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobsInclude<ExtArgs> | null
    /**
     * Filter which jobs to delete.
     */
    where: jobsWhereUniqueInput
  }

  /**
   * jobs deleteMany
   */
  export type jobsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which jobs to delete
     */
    where?: jobsWhereInput
    /**
     * Limit how many jobs to delete.
     */
    limit?: number
  }

  /**
   * jobs without action
   */
  export type jobsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobsInclude<ExtArgs> | null
  }


  /**
   * Model calendar_tokens
   */

  export type AggregateCalendar_tokens = {
    _count: Calendar_tokensCountAggregateOutputType | null
    _avg: Calendar_tokensAvgAggregateOutputType | null
    _sum: Calendar_tokensSumAggregateOutputType | null
    _min: Calendar_tokensMinAggregateOutputType | null
    _max: Calendar_tokensMaxAggregateOutputType | null
  }

  export type Calendar_tokensAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type Calendar_tokensSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type Calendar_tokensMinAggregateOutputType = {
    id: number | null
    accessToken: string | null
    refreshToken: string | null
    type: string | null
    userId: number | null
    isRevoked: boolean | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type Calendar_tokensMaxAggregateOutputType = {
    id: number | null
    accessToken: string | null
    refreshToken: string | null
    type: string | null
    userId: number | null
    isRevoked: boolean | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type Calendar_tokensCountAggregateOutputType = {
    id: number
    accessToken: number
    refreshToken: number
    type: number
    userId: number
    isRevoked: number
    createdAt: number
    expiresAt: number
    _all: number
  }


  export type Calendar_tokensAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type Calendar_tokensSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type Calendar_tokensMinAggregateInputType = {
    id?: true
    accessToken?: true
    refreshToken?: true
    type?: true
    userId?: true
    isRevoked?: true
    createdAt?: true
    expiresAt?: true
  }

  export type Calendar_tokensMaxAggregateInputType = {
    id?: true
    accessToken?: true
    refreshToken?: true
    type?: true
    userId?: true
    isRevoked?: true
    createdAt?: true
    expiresAt?: true
  }

  export type Calendar_tokensCountAggregateInputType = {
    id?: true
    accessToken?: true
    refreshToken?: true
    type?: true
    userId?: true
    isRevoked?: true
    createdAt?: true
    expiresAt?: true
    _all?: true
  }

  export type Calendar_tokensAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which calendar_tokens to aggregate.
     */
    where?: calendar_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of calendar_tokens to fetch.
     */
    orderBy?: calendar_tokensOrderByWithRelationInput | calendar_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: calendar_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` calendar_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` calendar_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned calendar_tokens
    **/
    _count?: true | Calendar_tokensCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Calendar_tokensAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Calendar_tokensSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Calendar_tokensMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Calendar_tokensMaxAggregateInputType
  }

  export type GetCalendar_tokensAggregateType<T extends Calendar_tokensAggregateArgs> = {
        [P in keyof T & keyof AggregateCalendar_tokens]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCalendar_tokens[P]>
      : GetScalarType<T[P], AggregateCalendar_tokens[P]>
  }




  export type calendar_tokensGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: calendar_tokensWhereInput
    orderBy?: calendar_tokensOrderByWithAggregationInput | calendar_tokensOrderByWithAggregationInput[]
    by: Calendar_tokensScalarFieldEnum[] | Calendar_tokensScalarFieldEnum
    having?: calendar_tokensScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Calendar_tokensCountAggregateInputType | true
    _avg?: Calendar_tokensAvgAggregateInputType
    _sum?: Calendar_tokensSumAggregateInputType
    _min?: Calendar_tokensMinAggregateInputType
    _max?: Calendar_tokensMaxAggregateInputType
  }

  export type Calendar_tokensGroupByOutputType = {
    id: number
    accessToken: string
    refreshToken: string
    type: string
    userId: number
    isRevoked: boolean
    createdAt: Date
    expiresAt: Date
    _count: Calendar_tokensCountAggregateOutputType | null
    _avg: Calendar_tokensAvgAggregateOutputType | null
    _sum: Calendar_tokensSumAggregateOutputType | null
    _min: Calendar_tokensMinAggregateOutputType | null
    _max: Calendar_tokensMaxAggregateOutputType | null
  }

  type GetCalendar_tokensGroupByPayload<T extends calendar_tokensGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Calendar_tokensGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Calendar_tokensGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Calendar_tokensGroupByOutputType[P]>
            : GetScalarType<T[P], Calendar_tokensGroupByOutputType[P]>
        }
      >
    >


  export type calendar_tokensSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    type?: boolean
    userId?: boolean
    isRevoked?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["calendar_tokens"]>

  export type calendar_tokensSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    type?: boolean
    userId?: boolean
    isRevoked?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["calendar_tokens"]>

  export type calendar_tokensSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    type?: boolean
    userId?: boolean
    isRevoked?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["calendar_tokens"]>

  export type calendar_tokensSelectScalar = {
    id?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    type?: boolean
    userId?: boolean
    isRevoked?: boolean
    createdAt?: boolean
    expiresAt?: boolean
  }

  export type calendar_tokensOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accessToken" | "refreshToken" | "type" | "userId" | "isRevoked" | "createdAt" | "expiresAt", ExtArgs["result"]["calendar_tokens"]>
  export type calendar_tokensInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type calendar_tokensIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type calendar_tokensIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $calendar_tokensPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "calendar_tokens"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      accessToken: string
      refreshToken: string
      type: string
      userId: number
      isRevoked: boolean
      createdAt: Date
      expiresAt: Date
    }, ExtArgs["result"]["calendar_tokens"]>
    composites: {}
  }

  type calendar_tokensGetPayload<S extends boolean | null | undefined | calendar_tokensDefaultArgs> = $Result.GetResult<Prisma.$calendar_tokensPayload, S>

  type calendar_tokensCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<calendar_tokensFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Calendar_tokensCountAggregateInputType | true
    }

  export interface calendar_tokensDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['calendar_tokens'], meta: { name: 'calendar_tokens' } }
    /**
     * Find zero or one Calendar_tokens that matches the filter.
     * @param {calendar_tokensFindUniqueArgs} args - Arguments to find a Calendar_tokens
     * @example
     * // Get one Calendar_tokens
     * const calendar_tokens = await prisma.calendar_tokens.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends calendar_tokensFindUniqueArgs>(args: SelectSubset<T, calendar_tokensFindUniqueArgs<ExtArgs>>): Prisma__calendar_tokensClient<$Result.GetResult<Prisma.$calendar_tokensPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Calendar_tokens that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {calendar_tokensFindUniqueOrThrowArgs} args - Arguments to find a Calendar_tokens
     * @example
     * // Get one Calendar_tokens
     * const calendar_tokens = await prisma.calendar_tokens.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends calendar_tokensFindUniqueOrThrowArgs>(args: SelectSubset<T, calendar_tokensFindUniqueOrThrowArgs<ExtArgs>>): Prisma__calendar_tokensClient<$Result.GetResult<Prisma.$calendar_tokensPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Calendar_tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {calendar_tokensFindFirstArgs} args - Arguments to find a Calendar_tokens
     * @example
     * // Get one Calendar_tokens
     * const calendar_tokens = await prisma.calendar_tokens.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends calendar_tokensFindFirstArgs>(args?: SelectSubset<T, calendar_tokensFindFirstArgs<ExtArgs>>): Prisma__calendar_tokensClient<$Result.GetResult<Prisma.$calendar_tokensPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Calendar_tokens that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {calendar_tokensFindFirstOrThrowArgs} args - Arguments to find a Calendar_tokens
     * @example
     * // Get one Calendar_tokens
     * const calendar_tokens = await prisma.calendar_tokens.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends calendar_tokensFindFirstOrThrowArgs>(args?: SelectSubset<T, calendar_tokensFindFirstOrThrowArgs<ExtArgs>>): Prisma__calendar_tokensClient<$Result.GetResult<Prisma.$calendar_tokensPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Calendar_tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {calendar_tokensFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Calendar_tokens
     * const calendar_tokens = await prisma.calendar_tokens.findMany()
     * 
     * // Get first 10 Calendar_tokens
     * const calendar_tokens = await prisma.calendar_tokens.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const calendar_tokensWithIdOnly = await prisma.calendar_tokens.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends calendar_tokensFindManyArgs>(args?: SelectSubset<T, calendar_tokensFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$calendar_tokensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Calendar_tokens.
     * @param {calendar_tokensCreateArgs} args - Arguments to create a Calendar_tokens.
     * @example
     * // Create one Calendar_tokens
     * const Calendar_tokens = await prisma.calendar_tokens.create({
     *   data: {
     *     // ... data to create a Calendar_tokens
     *   }
     * })
     * 
     */
    create<T extends calendar_tokensCreateArgs>(args: SelectSubset<T, calendar_tokensCreateArgs<ExtArgs>>): Prisma__calendar_tokensClient<$Result.GetResult<Prisma.$calendar_tokensPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Calendar_tokens.
     * @param {calendar_tokensCreateManyArgs} args - Arguments to create many Calendar_tokens.
     * @example
     * // Create many Calendar_tokens
     * const calendar_tokens = await prisma.calendar_tokens.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends calendar_tokensCreateManyArgs>(args?: SelectSubset<T, calendar_tokensCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Calendar_tokens and returns the data saved in the database.
     * @param {calendar_tokensCreateManyAndReturnArgs} args - Arguments to create many Calendar_tokens.
     * @example
     * // Create many Calendar_tokens
     * const calendar_tokens = await prisma.calendar_tokens.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Calendar_tokens and only return the `id`
     * const calendar_tokensWithIdOnly = await prisma.calendar_tokens.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends calendar_tokensCreateManyAndReturnArgs>(args?: SelectSubset<T, calendar_tokensCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$calendar_tokensPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Calendar_tokens.
     * @param {calendar_tokensDeleteArgs} args - Arguments to delete one Calendar_tokens.
     * @example
     * // Delete one Calendar_tokens
     * const Calendar_tokens = await prisma.calendar_tokens.delete({
     *   where: {
     *     // ... filter to delete one Calendar_tokens
     *   }
     * })
     * 
     */
    delete<T extends calendar_tokensDeleteArgs>(args: SelectSubset<T, calendar_tokensDeleteArgs<ExtArgs>>): Prisma__calendar_tokensClient<$Result.GetResult<Prisma.$calendar_tokensPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Calendar_tokens.
     * @param {calendar_tokensUpdateArgs} args - Arguments to update one Calendar_tokens.
     * @example
     * // Update one Calendar_tokens
     * const calendar_tokens = await prisma.calendar_tokens.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends calendar_tokensUpdateArgs>(args: SelectSubset<T, calendar_tokensUpdateArgs<ExtArgs>>): Prisma__calendar_tokensClient<$Result.GetResult<Prisma.$calendar_tokensPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Calendar_tokens.
     * @param {calendar_tokensDeleteManyArgs} args - Arguments to filter Calendar_tokens to delete.
     * @example
     * // Delete a few Calendar_tokens
     * const { count } = await prisma.calendar_tokens.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends calendar_tokensDeleteManyArgs>(args?: SelectSubset<T, calendar_tokensDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Calendar_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {calendar_tokensUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Calendar_tokens
     * const calendar_tokens = await prisma.calendar_tokens.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends calendar_tokensUpdateManyArgs>(args: SelectSubset<T, calendar_tokensUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Calendar_tokens and returns the data updated in the database.
     * @param {calendar_tokensUpdateManyAndReturnArgs} args - Arguments to update many Calendar_tokens.
     * @example
     * // Update many Calendar_tokens
     * const calendar_tokens = await prisma.calendar_tokens.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Calendar_tokens and only return the `id`
     * const calendar_tokensWithIdOnly = await prisma.calendar_tokens.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends calendar_tokensUpdateManyAndReturnArgs>(args: SelectSubset<T, calendar_tokensUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$calendar_tokensPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Calendar_tokens.
     * @param {calendar_tokensUpsertArgs} args - Arguments to update or create a Calendar_tokens.
     * @example
     * // Update or create a Calendar_tokens
     * const calendar_tokens = await prisma.calendar_tokens.upsert({
     *   create: {
     *     // ... data to create a Calendar_tokens
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Calendar_tokens we want to update
     *   }
     * })
     */
    upsert<T extends calendar_tokensUpsertArgs>(args: SelectSubset<T, calendar_tokensUpsertArgs<ExtArgs>>): Prisma__calendar_tokensClient<$Result.GetResult<Prisma.$calendar_tokensPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Calendar_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {calendar_tokensCountArgs} args - Arguments to filter Calendar_tokens to count.
     * @example
     * // Count the number of Calendar_tokens
     * const count = await prisma.calendar_tokens.count({
     *   where: {
     *     // ... the filter for the Calendar_tokens we want to count
     *   }
     * })
    **/
    count<T extends calendar_tokensCountArgs>(
      args?: Subset<T, calendar_tokensCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Calendar_tokensCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Calendar_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Calendar_tokensAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Calendar_tokensAggregateArgs>(args: Subset<T, Calendar_tokensAggregateArgs>): Prisma.PrismaPromise<GetCalendar_tokensAggregateType<T>>

    /**
     * Group by Calendar_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {calendar_tokensGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends calendar_tokensGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: calendar_tokensGroupByArgs['orderBy'] }
        : { orderBy?: calendar_tokensGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, calendar_tokensGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCalendar_tokensGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the calendar_tokens model
   */
  readonly fields: calendar_tokensFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for calendar_tokens.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__calendar_tokensClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the calendar_tokens model
   */
  interface calendar_tokensFieldRefs {
    readonly id: FieldRef<"calendar_tokens", 'Int'>
    readonly accessToken: FieldRef<"calendar_tokens", 'String'>
    readonly refreshToken: FieldRef<"calendar_tokens", 'String'>
    readonly type: FieldRef<"calendar_tokens", 'String'>
    readonly userId: FieldRef<"calendar_tokens", 'Int'>
    readonly isRevoked: FieldRef<"calendar_tokens", 'Boolean'>
    readonly createdAt: FieldRef<"calendar_tokens", 'DateTime'>
    readonly expiresAt: FieldRef<"calendar_tokens", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * calendar_tokens findUnique
   */
  export type calendar_tokensFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calendar_tokens
     */
    select?: calendar_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calendar_tokens
     */
    omit?: calendar_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calendar_tokensInclude<ExtArgs> | null
    /**
     * Filter, which calendar_tokens to fetch.
     */
    where: calendar_tokensWhereUniqueInput
  }

  /**
   * calendar_tokens findUniqueOrThrow
   */
  export type calendar_tokensFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calendar_tokens
     */
    select?: calendar_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calendar_tokens
     */
    omit?: calendar_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calendar_tokensInclude<ExtArgs> | null
    /**
     * Filter, which calendar_tokens to fetch.
     */
    where: calendar_tokensWhereUniqueInput
  }

  /**
   * calendar_tokens findFirst
   */
  export type calendar_tokensFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calendar_tokens
     */
    select?: calendar_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calendar_tokens
     */
    omit?: calendar_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calendar_tokensInclude<ExtArgs> | null
    /**
     * Filter, which calendar_tokens to fetch.
     */
    where?: calendar_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of calendar_tokens to fetch.
     */
    orderBy?: calendar_tokensOrderByWithRelationInput | calendar_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for calendar_tokens.
     */
    cursor?: calendar_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` calendar_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` calendar_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of calendar_tokens.
     */
    distinct?: Calendar_tokensScalarFieldEnum | Calendar_tokensScalarFieldEnum[]
  }

  /**
   * calendar_tokens findFirstOrThrow
   */
  export type calendar_tokensFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calendar_tokens
     */
    select?: calendar_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calendar_tokens
     */
    omit?: calendar_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calendar_tokensInclude<ExtArgs> | null
    /**
     * Filter, which calendar_tokens to fetch.
     */
    where?: calendar_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of calendar_tokens to fetch.
     */
    orderBy?: calendar_tokensOrderByWithRelationInput | calendar_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for calendar_tokens.
     */
    cursor?: calendar_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` calendar_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` calendar_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of calendar_tokens.
     */
    distinct?: Calendar_tokensScalarFieldEnum | Calendar_tokensScalarFieldEnum[]
  }

  /**
   * calendar_tokens findMany
   */
  export type calendar_tokensFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calendar_tokens
     */
    select?: calendar_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calendar_tokens
     */
    omit?: calendar_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calendar_tokensInclude<ExtArgs> | null
    /**
     * Filter, which calendar_tokens to fetch.
     */
    where?: calendar_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of calendar_tokens to fetch.
     */
    orderBy?: calendar_tokensOrderByWithRelationInput | calendar_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing calendar_tokens.
     */
    cursor?: calendar_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` calendar_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` calendar_tokens.
     */
    skip?: number
    distinct?: Calendar_tokensScalarFieldEnum | Calendar_tokensScalarFieldEnum[]
  }

  /**
   * calendar_tokens create
   */
  export type calendar_tokensCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calendar_tokens
     */
    select?: calendar_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calendar_tokens
     */
    omit?: calendar_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calendar_tokensInclude<ExtArgs> | null
    /**
     * The data needed to create a calendar_tokens.
     */
    data: XOR<calendar_tokensCreateInput, calendar_tokensUncheckedCreateInput>
  }

  /**
   * calendar_tokens createMany
   */
  export type calendar_tokensCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many calendar_tokens.
     */
    data: calendar_tokensCreateManyInput | calendar_tokensCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * calendar_tokens createManyAndReturn
   */
  export type calendar_tokensCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calendar_tokens
     */
    select?: calendar_tokensSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the calendar_tokens
     */
    omit?: calendar_tokensOmit<ExtArgs> | null
    /**
     * The data used to create many calendar_tokens.
     */
    data: calendar_tokensCreateManyInput | calendar_tokensCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calendar_tokensIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * calendar_tokens update
   */
  export type calendar_tokensUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calendar_tokens
     */
    select?: calendar_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calendar_tokens
     */
    omit?: calendar_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calendar_tokensInclude<ExtArgs> | null
    /**
     * The data needed to update a calendar_tokens.
     */
    data: XOR<calendar_tokensUpdateInput, calendar_tokensUncheckedUpdateInput>
    /**
     * Choose, which calendar_tokens to update.
     */
    where: calendar_tokensWhereUniqueInput
  }

  /**
   * calendar_tokens updateMany
   */
  export type calendar_tokensUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update calendar_tokens.
     */
    data: XOR<calendar_tokensUpdateManyMutationInput, calendar_tokensUncheckedUpdateManyInput>
    /**
     * Filter which calendar_tokens to update
     */
    where?: calendar_tokensWhereInput
    /**
     * Limit how many calendar_tokens to update.
     */
    limit?: number
  }

  /**
   * calendar_tokens updateManyAndReturn
   */
  export type calendar_tokensUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calendar_tokens
     */
    select?: calendar_tokensSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the calendar_tokens
     */
    omit?: calendar_tokensOmit<ExtArgs> | null
    /**
     * The data used to update calendar_tokens.
     */
    data: XOR<calendar_tokensUpdateManyMutationInput, calendar_tokensUncheckedUpdateManyInput>
    /**
     * Filter which calendar_tokens to update
     */
    where?: calendar_tokensWhereInput
    /**
     * Limit how many calendar_tokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calendar_tokensIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * calendar_tokens upsert
   */
  export type calendar_tokensUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calendar_tokens
     */
    select?: calendar_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calendar_tokens
     */
    omit?: calendar_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calendar_tokensInclude<ExtArgs> | null
    /**
     * The filter to search for the calendar_tokens to update in case it exists.
     */
    where: calendar_tokensWhereUniqueInput
    /**
     * In case the calendar_tokens found by the `where` argument doesn't exist, create a new calendar_tokens with this data.
     */
    create: XOR<calendar_tokensCreateInput, calendar_tokensUncheckedCreateInput>
    /**
     * In case the calendar_tokens was found with the provided `where` argument, update it with this data.
     */
    update: XOR<calendar_tokensUpdateInput, calendar_tokensUncheckedUpdateInput>
  }

  /**
   * calendar_tokens delete
   */
  export type calendar_tokensDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calendar_tokens
     */
    select?: calendar_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calendar_tokens
     */
    omit?: calendar_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calendar_tokensInclude<ExtArgs> | null
    /**
     * Filter which calendar_tokens to delete.
     */
    where: calendar_tokensWhereUniqueInput
  }

  /**
   * calendar_tokens deleteMany
   */
  export type calendar_tokensDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which calendar_tokens to delete
     */
    where?: calendar_tokensWhereInput
    /**
     * Limit how many calendar_tokens to delete.
     */
    limit?: number
  }

  /**
   * calendar_tokens without action
   */
  export type calendar_tokensDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calendar_tokens
     */
    select?: calendar_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calendar_tokens
     */
    omit?: calendar_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calendar_tokensInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    groupId: 'groupId',
    color: 'color',
    avatar: 'avatar',
    password: 'password',
    token: 'token',
    isAdmin: 'isAdmin',
    createdAt: 'createdAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const CalendarsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    userId: 'userId',
    timezone: 'timezone',
    createdAt: 'createdAt'
  };

  export type CalendarsScalarFieldEnum = (typeof CalendarsScalarFieldEnum)[keyof typeof CalendarsScalarFieldEnum]


  export const EventsScalarFieldEnum: {
    id: 'id',
    calendarId: 'calendarId',
    eventId: 'eventId',
    summary: 'summary',
    description: 'description',
    creator: 'creator',
    organizer: 'organizer',
    start: 'start',
    end: 'end',
    createdAt: 'createdAt'
  };

  export type EventsScalarFieldEnum = (typeof EventsScalarFieldEnum)[keyof typeof EventsScalarFieldEnum]


  export const Sync_tokensScalarFieldEnum: {
    id: 'id',
    name: 'name',
    token: 'token',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type Sync_tokensScalarFieldEnum = (typeof Sync_tokensScalarFieldEnum)[keyof typeof Sync_tokensScalarFieldEnum]


  export const Job_offersScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    companyName: 'companyName',
    position: 'position',
    salary: 'salary',
    jobType: 'jobType',
    source: 'source',
    interviews: 'interviews',
    fileURL: 'fileURL',
    receivedAt: 'receivedAt',
    startAt: 'startAt',
    createdAt: 'createdAt'
  };

  export type Job_offersScalarFieldEnum = (typeof Job_offersScalarFieldEnum)[keyof typeof Job_offersScalarFieldEnum]


  export const Job_applicationsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    companyName: 'companyName',
    position: 'position',
    createdAt: 'createdAt'
  };

  export type Job_applicationsScalarFieldEnum = (typeof Job_applicationsScalarFieldEnum)[keyof typeof Job_applicationsScalarFieldEnum]


  export const JobsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    companyName: 'companyName',
    position: 'position',
    isActive: 'isActive',
    comments: 'comments',
    startedAt: 'startedAt',
    createdAt: 'createdAt'
  };

  export type JobsScalarFieldEnum = (typeof JobsScalarFieldEnum)[keyof typeof JobsScalarFieldEnum]


  export const Calendar_tokensScalarFieldEnum: {
    id: 'id',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    type: 'type',
    userId: 'userId',
    isRevoked: 'isRevoked',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt'
  };

  export type Calendar_tokensScalarFieldEnum = (typeof Calendar_tokensScalarFieldEnum)[keyof typeof Calendar_tokensScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    name?: StringFilter<"users"> | string
    groupId?: IntNullableFilter<"users"> | number | null
    color?: StringFilter<"users"> | string
    avatar?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    token?: StringFilter<"users"> | string
    isAdmin?: BoolFilter<"users"> | boolean
    createdAt?: DateTimeFilter<"users"> | Date | string
    calendars?: CalendarsListRelationFilter
    job_offers?: Job_offersListRelationFilter
    job_applications?: Job_applicationsListRelationFilter
    calendar_tokens?: Calendar_tokensListRelationFilter
    sync_tokens?: Sync_tokensListRelationFilter
    jobs?: JobsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    groupId?: SortOrderInput | SortOrder
    color?: SortOrder
    avatar?: SortOrder
    password?: SortOrder
    token?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    calendars?: calendarsOrderByRelationAggregateInput
    job_offers?: job_offersOrderByRelationAggregateInput
    job_applications?: job_applicationsOrderByRelationAggregateInput
    calendar_tokens?: calendar_tokensOrderByRelationAggregateInput
    sync_tokens?: sync_tokensOrderByRelationAggregateInput
    jobs?: jobsOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    groupId?: IntNullableFilter<"users"> | number | null
    color?: StringFilter<"users"> | string
    avatar?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    token?: StringFilter<"users"> | string
    isAdmin?: BoolFilter<"users"> | boolean
    createdAt?: DateTimeFilter<"users"> | Date | string
    calendars?: CalendarsListRelationFilter
    job_offers?: Job_offersListRelationFilter
    job_applications?: Job_applicationsListRelationFilter
    calendar_tokens?: Calendar_tokensListRelationFilter
    sync_tokens?: Sync_tokensListRelationFilter
    jobs?: JobsListRelationFilter
  }, "id" | "name">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    groupId?: SortOrderInput | SortOrder
    color?: SortOrder
    avatar?: SortOrder
    password?: SortOrder
    token?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    name?: StringWithAggregatesFilter<"users"> | string
    groupId?: IntNullableWithAggregatesFilter<"users"> | number | null
    color?: StringWithAggregatesFilter<"users"> | string
    avatar?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    token?: StringWithAggregatesFilter<"users"> | string
    isAdmin?: BoolWithAggregatesFilter<"users"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"users"> | Date | string
  }

  export type calendarsWhereInput = {
    AND?: calendarsWhereInput | calendarsWhereInput[]
    OR?: calendarsWhereInput[]
    NOT?: calendarsWhereInput | calendarsWhereInput[]
    id?: IntFilter<"calendars"> | number
    name?: StringFilter<"calendars"> | string
    email?: StringFilter<"calendars"> | string
    userId?: IntFilter<"calendars"> | number
    timezone?: StringFilter<"calendars"> | string
    createdAt?: DateTimeFilter<"calendars"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    events?: EventsListRelationFilter
  }

  export type calendarsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    userId?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
    user?: usersOrderByWithRelationInput
    events?: eventsOrderByRelationAggregateInput
  }

  export type calendarsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email_userId?: calendarsEmailUserIdCompoundUniqueInput
    AND?: calendarsWhereInput | calendarsWhereInput[]
    OR?: calendarsWhereInput[]
    NOT?: calendarsWhereInput | calendarsWhereInput[]
    name?: StringFilter<"calendars"> | string
    email?: StringFilter<"calendars"> | string
    userId?: IntFilter<"calendars"> | number
    timezone?: StringFilter<"calendars"> | string
    createdAt?: DateTimeFilter<"calendars"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    events?: EventsListRelationFilter
  }, "id" | "email_userId">

  export type calendarsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    userId?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
    _count?: calendarsCountOrderByAggregateInput
    _avg?: calendarsAvgOrderByAggregateInput
    _max?: calendarsMaxOrderByAggregateInput
    _min?: calendarsMinOrderByAggregateInput
    _sum?: calendarsSumOrderByAggregateInput
  }

  export type calendarsScalarWhereWithAggregatesInput = {
    AND?: calendarsScalarWhereWithAggregatesInput | calendarsScalarWhereWithAggregatesInput[]
    OR?: calendarsScalarWhereWithAggregatesInput[]
    NOT?: calendarsScalarWhereWithAggregatesInput | calendarsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"calendars"> | number
    name?: StringWithAggregatesFilter<"calendars"> | string
    email?: StringWithAggregatesFilter<"calendars"> | string
    userId?: IntWithAggregatesFilter<"calendars"> | number
    timezone?: StringWithAggregatesFilter<"calendars"> | string
    createdAt?: DateTimeWithAggregatesFilter<"calendars"> | Date | string
  }

  export type eventsWhereInput = {
    AND?: eventsWhereInput | eventsWhereInput[]
    OR?: eventsWhereInput[]
    NOT?: eventsWhereInput | eventsWhereInput[]
    id?: IntFilter<"events"> | number
    calendarId?: IntFilter<"events"> | number
    eventId?: StringFilter<"events"> | string
    summary?: StringFilter<"events"> | string
    description?: StringFilter<"events"> | string
    creator?: StringFilter<"events"> | string
    organizer?: StringFilter<"events"> | string
    start?: DateTimeFilter<"events"> | Date | string
    end?: DateTimeFilter<"events"> | Date | string
    createdAt?: DateTimeFilter<"events"> | Date | string
    calendar?: XOR<CalendarsScalarRelationFilter, calendarsWhereInput>
  }

  export type eventsOrderByWithRelationInput = {
    id?: SortOrder
    calendarId?: SortOrder
    eventId?: SortOrder
    summary?: SortOrder
    description?: SortOrder
    creator?: SortOrder
    organizer?: SortOrder
    start?: SortOrder
    end?: SortOrder
    createdAt?: SortOrder
    calendar?: calendarsOrderByWithRelationInput
  }

  export type eventsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    calendarId_eventId?: eventsCalendarIdEventIdCompoundUniqueInput
    AND?: eventsWhereInput | eventsWhereInput[]
    OR?: eventsWhereInput[]
    NOT?: eventsWhereInput | eventsWhereInput[]
    calendarId?: IntFilter<"events"> | number
    eventId?: StringFilter<"events"> | string
    summary?: StringFilter<"events"> | string
    description?: StringFilter<"events"> | string
    creator?: StringFilter<"events"> | string
    organizer?: StringFilter<"events"> | string
    start?: DateTimeFilter<"events"> | Date | string
    end?: DateTimeFilter<"events"> | Date | string
    createdAt?: DateTimeFilter<"events"> | Date | string
    calendar?: XOR<CalendarsScalarRelationFilter, calendarsWhereInput>
  }, "id" | "calendarId_eventId">

  export type eventsOrderByWithAggregationInput = {
    id?: SortOrder
    calendarId?: SortOrder
    eventId?: SortOrder
    summary?: SortOrder
    description?: SortOrder
    creator?: SortOrder
    organizer?: SortOrder
    start?: SortOrder
    end?: SortOrder
    createdAt?: SortOrder
    _count?: eventsCountOrderByAggregateInput
    _avg?: eventsAvgOrderByAggregateInput
    _max?: eventsMaxOrderByAggregateInput
    _min?: eventsMinOrderByAggregateInput
    _sum?: eventsSumOrderByAggregateInput
  }

  export type eventsScalarWhereWithAggregatesInput = {
    AND?: eventsScalarWhereWithAggregatesInput | eventsScalarWhereWithAggregatesInput[]
    OR?: eventsScalarWhereWithAggregatesInput[]
    NOT?: eventsScalarWhereWithAggregatesInput | eventsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"events"> | number
    calendarId?: IntWithAggregatesFilter<"events"> | number
    eventId?: StringWithAggregatesFilter<"events"> | string
    summary?: StringWithAggregatesFilter<"events"> | string
    description?: StringWithAggregatesFilter<"events"> | string
    creator?: StringWithAggregatesFilter<"events"> | string
    organizer?: StringWithAggregatesFilter<"events"> | string
    start?: DateTimeWithAggregatesFilter<"events"> | Date | string
    end?: DateTimeWithAggregatesFilter<"events"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"events"> | Date | string
  }

  export type sync_tokensWhereInput = {
    AND?: sync_tokensWhereInput | sync_tokensWhereInput[]
    OR?: sync_tokensWhereInput[]
    NOT?: sync_tokensWhereInput | sync_tokensWhereInput[]
    id?: IntFilter<"sync_tokens"> | number
    name?: StringFilter<"sync_tokens"> | string
    token?: StringFilter<"sync_tokens"> | string
    userId?: IntFilter<"sync_tokens"> | number
    createdAt?: DateTimeFilter<"sync_tokens"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type sync_tokensOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    user?: usersOrderByWithRelationInput
  }

  export type sync_tokensWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name_userId?: sync_tokensNameUserIdCompoundUniqueInput
    AND?: sync_tokensWhereInput | sync_tokensWhereInput[]
    OR?: sync_tokensWhereInput[]
    NOT?: sync_tokensWhereInput | sync_tokensWhereInput[]
    name?: StringFilter<"sync_tokens"> | string
    token?: StringFilter<"sync_tokens"> | string
    userId?: IntFilter<"sync_tokens"> | number
    createdAt?: DateTimeFilter<"sync_tokens"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id" | "name_userId">

  export type sync_tokensOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: sync_tokensCountOrderByAggregateInput
    _avg?: sync_tokensAvgOrderByAggregateInput
    _max?: sync_tokensMaxOrderByAggregateInput
    _min?: sync_tokensMinOrderByAggregateInput
    _sum?: sync_tokensSumOrderByAggregateInput
  }

  export type sync_tokensScalarWhereWithAggregatesInput = {
    AND?: sync_tokensScalarWhereWithAggregatesInput | sync_tokensScalarWhereWithAggregatesInput[]
    OR?: sync_tokensScalarWhereWithAggregatesInput[]
    NOT?: sync_tokensScalarWhereWithAggregatesInput | sync_tokensScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"sync_tokens"> | number
    name?: StringWithAggregatesFilter<"sync_tokens"> | string
    token?: StringWithAggregatesFilter<"sync_tokens"> | string
    userId?: IntWithAggregatesFilter<"sync_tokens"> | number
    createdAt?: DateTimeWithAggregatesFilter<"sync_tokens"> | Date | string
  }

  export type job_offersWhereInput = {
    AND?: job_offersWhereInput | job_offersWhereInput[]
    OR?: job_offersWhereInput[]
    NOT?: job_offersWhereInput | job_offersWhereInput[]
    id?: IntFilter<"job_offers"> | number
    userId?: IntFilter<"job_offers"> | number
    companyName?: StringFilter<"job_offers"> | string
    position?: StringFilter<"job_offers"> | string
    salary?: StringFilter<"job_offers"> | string
    jobType?: StringFilter<"job_offers"> | string
    source?: StringFilter<"job_offers"> | string
    interviews?: IntFilter<"job_offers"> | number
    fileURL?: StringFilter<"job_offers"> | string
    receivedAt?: DateTimeFilter<"job_offers"> | Date | string
    startAt?: DateTimeNullableFilter<"job_offers"> | Date | string | null
    createdAt?: DateTimeFilter<"job_offers"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type job_offersOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    position?: SortOrder
    salary?: SortOrder
    jobType?: SortOrder
    source?: SortOrder
    interviews?: SortOrder
    fileURL?: SortOrder
    receivedAt?: SortOrder
    startAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: usersOrderByWithRelationInput
  }

  export type job_offersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: job_offersWhereInput | job_offersWhereInput[]
    OR?: job_offersWhereInput[]
    NOT?: job_offersWhereInput | job_offersWhereInput[]
    userId?: IntFilter<"job_offers"> | number
    companyName?: StringFilter<"job_offers"> | string
    position?: StringFilter<"job_offers"> | string
    salary?: StringFilter<"job_offers"> | string
    jobType?: StringFilter<"job_offers"> | string
    source?: StringFilter<"job_offers"> | string
    interviews?: IntFilter<"job_offers"> | number
    fileURL?: StringFilter<"job_offers"> | string
    receivedAt?: DateTimeFilter<"job_offers"> | Date | string
    startAt?: DateTimeNullableFilter<"job_offers"> | Date | string | null
    createdAt?: DateTimeFilter<"job_offers"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type job_offersOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    position?: SortOrder
    salary?: SortOrder
    jobType?: SortOrder
    source?: SortOrder
    interviews?: SortOrder
    fileURL?: SortOrder
    receivedAt?: SortOrder
    startAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: job_offersCountOrderByAggregateInput
    _avg?: job_offersAvgOrderByAggregateInput
    _max?: job_offersMaxOrderByAggregateInput
    _min?: job_offersMinOrderByAggregateInput
    _sum?: job_offersSumOrderByAggregateInput
  }

  export type job_offersScalarWhereWithAggregatesInput = {
    AND?: job_offersScalarWhereWithAggregatesInput | job_offersScalarWhereWithAggregatesInput[]
    OR?: job_offersScalarWhereWithAggregatesInput[]
    NOT?: job_offersScalarWhereWithAggregatesInput | job_offersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"job_offers"> | number
    userId?: IntWithAggregatesFilter<"job_offers"> | number
    companyName?: StringWithAggregatesFilter<"job_offers"> | string
    position?: StringWithAggregatesFilter<"job_offers"> | string
    salary?: StringWithAggregatesFilter<"job_offers"> | string
    jobType?: StringWithAggregatesFilter<"job_offers"> | string
    source?: StringWithAggregatesFilter<"job_offers"> | string
    interviews?: IntWithAggregatesFilter<"job_offers"> | number
    fileURL?: StringWithAggregatesFilter<"job_offers"> | string
    receivedAt?: DateTimeWithAggregatesFilter<"job_offers"> | Date | string
    startAt?: DateTimeNullableWithAggregatesFilter<"job_offers"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"job_offers"> | Date | string
  }

  export type job_applicationsWhereInput = {
    AND?: job_applicationsWhereInput | job_applicationsWhereInput[]
    OR?: job_applicationsWhereInput[]
    NOT?: job_applicationsWhereInput | job_applicationsWhereInput[]
    id?: IntFilter<"job_applications"> | number
    userId?: IntFilter<"job_applications"> | number
    companyName?: StringFilter<"job_applications"> | string
    position?: StringFilter<"job_applications"> | string
    createdAt?: DateTimeFilter<"job_applications"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type job_applicationsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    user?: usersOrderByWithRelationInput
  }

  export type job_applicationsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: job_applicationsWhereInput | job_applicationsWhereInput[]
    OR?: job_applicationsWhereInput[]
    NOT?: job_applicationsWhereInput | job_applicationsWhereInput[]
    userId?: IntFilter<"job_applications"> | number
    companyName?: StringFilter<"job_applications"> | string
    position?: StringFilter<"job_applications"> | string
    createdAt?: DateTimeFilter<"job_applications"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type job_applicationsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    _count?: job_applicationsCountOrderByAggregateInput
    _avg?: job_applicationsAvgOrderByAggregateInput
    _max?: job_applicationsMaxOrderByAggregateInput
    _min?: job_applicationsMinOrderByAggregateInput
    _sum?: job_applicationsSumOrderByAggregateInput
  }

  export type job_applicationsScalarWhereWithAggregatesInput = {
    AND?: job_applicationsScalarWhereWithAggregatesInput | job_applicationsScalarWhereWithAggregatesInput[]
    OR?: job_applicationsScalarWhereWithAggregatesInput[]
    NOT?: job_applicationsScalarWhereWithAggregatesInput | job_applicationsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"job_applications"> | number
    userId?: IntWithAggregatesFilter<"job_applications"> | number
    companyName?: StringWithAggregatesFilter<"job_applications"> | string
    position?: StringWithAggregatesFilter<"job_applications"> | string
    createdAt?: DateTimeWithAggregatesFilter<"job_applications"> | Date | string
  }

  export type jobsWhereInput = {
    AND?: jobsWhereInput | jobsWhereInput[]
    OR?: jobsWhereInput[]
    NOT?: jobsWhereInput | jobsWhereInput[]
    id?: IntFilter<"jobs"> | number
    userId?: IntFilter<"jobs"> | number
    companyName?: StringFilter<"jobs"> | string
    position?: StringFilter<"jobs"> | string
    isActive?: BoolFilter<"jobs"> | boolean
    comments?: StringNullableFilter<"jobs"> | string | null
    startedAt?: DateTimeNullableFilter<"jobs"> | Date | string | null
    createdAt?: DateTimeFilter<"jobs"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type jobsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    position?: SortOrder
    isActive?: SortOrder
    comments?: SortOrderInput | SortOrder
    startedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: usersOrderByWithRelationInput
  }

  export type jobsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: jobsWhereInput | jobsWhereInput[]
    OR?: jobsWhereInput[]
    NOT?: jobsWhereInput | jobsWhereInput[]
    userId?: IntFilter<"jobs"> | number
    companyName?: StringFilter<"jobs"> | string
    position?: StringFilter<"jobs"> | string
    isActive?: BoolFilter<"jobs"> | boolean
    comments?: StringNullableFilter<"jobs"> | string | null
    startedAt?: DateTimeNullableFilter<"jobs"> | Date | string | null
    createdAt?: DateTimeFilter<"jobs"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type jobsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    position?: SortOrder
    isActive?: SortOrder
    comments?: SortOrderInput | SortOrder
    startedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: jobsCountOrderByAggregateInput
    _avg?: jobsAvgOrderByAggregateInput
    _max?: jobsMaxOrderByAggregateInput
    _min?: jobsMinOrderByAggregateInput
    _sum?: jobsSumOrderByAggregateInput
  }

  export type jobsScalarWhereWithAggregatesInput = {
    AND?: jobsScalarWhereWithAggregatesInput | jobsScalarWhereWithAggregatesInput[]
    OR?: jobsScalarWhereWithAggregatesInput[]
    NOT?: jobsScalarWhereWithAggregatesInput | jobsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"jobs"> | number
    userId?: IntWithAggregatesFilter<"jobs"> | number
    companyName?: StringWithAggregatesFilter<"jobs"> | string
    position?: StringWithAggregatesFilter<"jobs"> | string
    isActive?: BoolWithAggregatesFilter<"jobs"> | boolean
    comments?: StringNullableWithAggregatesFilter<"jobs"> | string | null
    startedAt?: DateTimeNullableWithAggregatesFilter<"jobs"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"jobs"> | Date | string
  }

  export type calendar_tokensWhereInput = {
    AND?: calendar_tokensWhereInput | calendar_tokensWhereInput[]
    OR?: calendar_tokensWhereInput[]
    NOT?: calendar_tokensWhereInput | calendar_tokensWhereInput[]
    id?: IntFilter<"calendar_tokens"> | number
    accessToken?: StringFilter<"calendar_tokens"> | string
    refreshToken?: StringFilter<"calendar_tokens"> | string
    type?: StringFilter<"calendar_tokens"> | string
    userId?: IntFilter<"calendar_tokens"> | number
    isRevoked?: BoolFilter<"calendar_tokens"> | boolean
    createdAt?: DateTimeFilter<"calendar_tokens"> | Date | string
    expiresAt?: DateTimeFilter<"calendar_tokens"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type calendar_tokensOrderByWithRelationInput = {
    id?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    isRevoked?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    user?: usersOrderByWithRelationInput
  }

  export type calendar_tokensWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    accessToken?: string
    refreshToken?: string
    AND?: calendar_tokensWhereInput | calendar_tokensWhereInput[]
    OR?: calendar_tokensWhereInput[]
    NOT?: calendar_tokensWhereInput | calendar_tokensWhereInput[]
    type?: StringFilter<"calendar_tokens"> | string
    userId?: IntFilter<"calendar_tokens"> | number
    isRevoked?: BoolFilter<"calendar_tokens"> | boolean
    createdAt?: DateTimeFilter<"calendar_tokens"> | Date | string
    expiresAt?: DateTimeFilter<"calendar_tokens"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id" | "accessToken" | "refreshToken">

  export type calendar_tokensOrderByWithAggregationInput = {
    id?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    isRevoked?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    _count?: calendar_tokensCountOrderByAggregateInput
    _avg?: calendar_tokensAvgOrderByAggregateInput
    _max?: calendar_tokensMaxOrderByAggregateInput
    _min?: calendar_tokensMinOrderByAggregateInput
    _sum?: calendar_tokensSumOrderByAggregateInput
  }

  export type calendar_tokensScalarWhereWithAggregatesInput = {
    AND?: calendar_tokensScalarWhereWithAggregatesInput | calendar_tokensScalarWhereWithAggregatesInput[]
    OR?: calendar_tokensScalarWhereWithAggregatesInput[]
    NOT?: calendar_tokensScalarWhereWithAggregatesInput | calendar_tokensScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"calendar_tokens"> | number
    accessToken?: StringWithAggregatesFilter<"calendar_tokens"> | string
    refreshToken?: StringWithAggregatesFilter<"calendar_tokens"> | string
    type?: StringWithAggregatesFilter<"calendar_tokens"> | string
    userId?: IntWithAggregatesFilter<"calendar_tokens"> | number
    isRevoked?: BoolWithAggregatesFilter<"calendar_tokens"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"calendar_tokens"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"calendar_tokens"> | Date | string
  }

  export type usersCreateInput = {
    name: string
    groupId?: number | null
    color?: string
    avatar: string
    password: string
    token: string
    isAdmin?: boolean
    createdAt?: Date | string
    calendars?: calendarsCreateNestedManyWithoutUserInput
    job_offers?: job_offersCreateNestedManyWithoutUserInput
    job_applications?: job_applicationsCreateNestedManyWithoutUserInput
    calendar_tokens?: calendar_tokensCreateNestedManyWithoutUserInput
    sync_tokens?: sync_tokensCreateNestedManyWithoutUserInput
    jobs?: jobsCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    name: string
    groupId?: number | null
    color?: string
    avatar: string
    password: string
    token: string
    isAdmin?: boolean
    createdAt?: Date | string
    calendars?: calendarsUncheckedCreateNestedManyWithoutUserInput
    job_offers?: job_offersUncheckedCreateNestedManyWithoutUserInput
    job_applications?: job_applicationsUncheckedCreateNestedManyWithoutUserInput
    calendar_tokens?: calendar_tokensUncheckedCreateNestedManyWithoutUserInput
    sync_tokens?: sync_tokensUncheckedCreateNestedManyWithoutUserInput
    jobs?: jobsUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    color?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calendars?: calendarsUpdateManyWithoutUserNestedInput
    job_offers?: job_offersUpdateManyWithoutUserNestedInput
    job_applications?: job_applicationsUpdateManyWithoutUserNestedInput
    calendar_tokens?: calendar_tokensUpdateManyWithoutUserNestedInput
    sync_tokens?: sync_tokensUpdateManyWithoutUserNestedInput
    jobs?: jobsUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    color?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calendars?: calendarsUncheckedUpdateManyWithoutUserNestedInput
    job_offers?: job_offersUncheckedUpdateManyWithoutUserNestedInput
    job_applications?: job_applicationsUncheckedUpdateManyWithoutUserNestedInput
    calendar_tokens?: calendar_tokensUncheckedUpdateManyWithoutUserNestedInput
    sync_tokens?: sync_tokensUncheckedUpdateManyWithoutUserNestedInput
    jobs?: jobsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    name: string
    groupId?: number | null
    color?: string
    avatar: string
    password: string
    token: string
    isAdmin?: boolean
    createdAt?: Date | string
  }

  export type usersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    color?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    color?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type calendarsCreateInput = {
    name: string
    email: string
    timezone: string
    createdAt?: Date | string
    user: usersCreateNestedOneWithoutCalendarsInput
    events?: eventsCreateNestedManyWithoutCalendarInput
  }

  export type calendarsUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    userId: number
    timezone: string
    createdAt?: Date | string
    events?: eventsUncheckedCreateNestedManyWithoutCalendarInput
  }

  export type calendarsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutCalendarsNestedInput
    events?: eventsUpdateManyWithoutCalendarNestedInput
  }

  export type calendarsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: eventsUncheckedUpdateManyWithoutCalendarNestedInput
  }

  export type calendarsCreateManyInput = {
    id?: number
    name: string
    email: string
    userId: number
    timezone: string
    createdAt?: Date | string
  }

  export type calendarsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type calendarsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type eventsCreateInput = {
    eventId: string
    summary: string
    description: string
    creator: string
    organizer: string
    start: Date | string
    end: Date | string
    createdAt?: Date | string
    calendar: calendarsCreateNestedOneWithoutEventsInput
  }

  export type eventsUncheckedCreateInput = {
    id?: number
    calendarId: number
    eventId: string
    summary: string
    description: string
    creator: string
    organizer: string
    start: Date | string
    end: Date | string
    createdAt?: Date | string
  }

  export type eventsUpdateInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    creator?: StringFieldUpdateOperationsInput | string
    organizer?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calendar?: calendarsUpdateOneRequiredWithoutEventsNestedInput
  }

  export type eventsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    calendarId?: IntFieldUpdateOperationsInput | number
    eventId?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    creator?: StringFieldUpdateOperationsInput | string
    organizer?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type eventsCreateManyInput = {
    id?: number
    calendarId: number
    eventId: string
    summary: string
    description: string
    creator: string
    organizer: string
    start: Date | string
    end: Date | string
    createdAt?: Date | string
  }

  export type eventsUpdateManyMutationInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    creator?: StringFieldUpdateOperationsInput | string
    organizer?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type eventsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    calendarId?: IntFieldUpdateOperationsInput | number
    eventId?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    creator?: StringFieldUpdateOperationsInput | string
    organizer?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sync_tokensCreateInput = {
    name: string
    token: string
    createdAt?: Date | string
    user: usersCreateNestedOneWithoutSync_tokensInput
  }

  export type sync_tokensUncheckedCreateInput = {
    id?: number
    name: string
    token: string
    userId: number
    createdAt?: Date | string
  }

  export type sync_tokensUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutSync_tokensNestedInput
  }

  export type sync_tokensUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sync_tokensCreateManyInput = {
    id?: number
    name: string
    token: string
    userId: number
    createdAt?: Date | string
  }

  export type sync_tokensUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sync_tokensUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type job_offersCreateInput = {
    companyName: string
    position: string
    salary: string
    jobType: string
    source: string
    interviews: number
    fileURL: string
    receivedAt: Date | string
    startAt?: Date | string | null
    createdAt?: Date | string
    user: usersCreateNestedOneWithoutJob_offersInput
  }

  export type job_offersUncheckedCreateInput = {
    id?: number
    userId: number
    companyName: string
    position: string
    salary: string
    jobType: string
    source: string
    interviews: number
    fileURL: string
    receivedAt: Date | string
    startAt?: Date | string | null
    createdAt?: Date | string
  }

  export type job_offersUpdateInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    salary?: StringFieldUpdateOperationsInput | string
    jobType?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    interviews?: IntFieldUpdateOperationsInput | number
    fileURL?: StringFieldUpdateOperationsInput | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutJob_offersNestedInput
  }

  export type job_offersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    salary?: StringFieldUpdateOperationsInput | string
    jobType?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    interviews?: IntFieldUpdateOperationsInput | number
    fileURL?: StringFieldUpdateOperationsInput | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type job_offersCreateManyInput = {
    id?: number
    userId: number
    companyName: string
    position: string
    salary: string
    jobType: string
    source: string
    interviews: number
    fileURL: string
    receivedAt: Date | string
    startAt?: Date | string | null
    createdAt?: Date | string
  }

  export type job_offersUpdateManyMutationInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    salary?: StringFieldUpdateOperationsInput | string
    jobType?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    interviews?: IntFieldUpdateOperationsInput | number
    fileURL?: StringFieldUpdateOperationsInput | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type job_offersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    salary?: StringFieldUpdateOperationsInput | string
    jobType?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    interviews?: IntFieldUpdateOperationsInput | number
    fileURL?: StringFieldUpdateOperationsInput | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type job_applicationsCreateInput = {
    companyName: string
    position: string
    createdAt?: Date | string
    user: usersCreateNestedOneWithoutJob_applicationsInput
  }

  export type job_applicationsUncheckedCreateInput = {
    id?: number
    userId: number
    companyName: string
    position: string
    createdAt?: Date | string
  }

  export type job_applicationsUpdateInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutJob_applicationsNestedInput
  }

  export type job_applicationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type job_applicationsCreateManyInput = {
    id?: number
    userId: number
    companyName: string
    position: string
    createdAt?: Date | string
  }

  export type job_applicationsUpdateManyMutationInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type job_applicationsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type jobsCreateInput = {
    companyName: string
    position: string
    isActive?: boolean
    comments?: string | null
    startedAt?: Date | string | null
    createdAt?: Date | string
    user: usersCreateNestedOneWithoutJobsInput
  }

  export type jobsUncheckedCreateInput = {
    id?: number
    userId: number
    companyName: string
    position: string
    isActive?: boolean
    comments?: string | null
    startedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type jobsUpdateInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutJobsNestedInput
  }

  export type jobsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type jobsCreateManyInput = {
    id?: number
    userId: number
    companyName: string
    position: string
    isActive?: boolean
    comments?: string | null
    startedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type jobsUpdateManyMutationInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type jobsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type calendar_tokensCreateInput = {
    accessToken: string
    refreshToken: string
    type?: string
    isRevoked?: boolean
    createdAt?: Date | string
    expiresAt?: Date | string
    user: usersCreateNestedOneWithoutCalendar_tokensInput
  }

  export type calendar_tokensUncheckedCreateInput = {
    id?: number
    accessToken: string
    refreshToken: string
    type?: string
    userId: number
    isRevoked?: boolean
    createdAt?: Date | string
    expiresAt?: Date | string
  }

  export type calendar_tokensUpdateInput = {
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutCalendar_tokensNestedInput
  }

  export type calendar_tokensUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type calendar_tokensCreateManyInput = {
    id?: number
    accessToken: string
    refreshToken: string
    type?: string
    userId: number
    isRevoked?: boolean
    createdAt?: Date | string
    expiresAt?: Date | string
  }

  export type calendar_tokensUpdateManyMutationInput = {
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type calendar_tokensUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CalendarsListRelationFilter = {
    every?: calendarsWhereInput
    some?: calendarsWhereInput
    none?: calendarsWhereInput
  }

  export type Job_offersListRelationFilter = {
    every?: job_offersWhereInput
    some?: job_offersWhereInput
    none?: job_offersWhereInput
  }

  export type Job_applicationsListRelationFilter = {
    every?: job_applicationsWhereInput
    some?: job_applicationsWhereInput
    none?: job_applicationsWhereInput
  }

  export type Calendar_tokensListRelationFilter = {
    every?: calendar_tokensWhereInput
    some?: calendar_tokensWhereInput
    none?: calendar_tokensWhereInput
  }

  export type Sync_tokensListRelationFilter = {
    every?: sync_tokensWhereInput
    some?: sync_tokensWhereInput
    none?: sync_tokensWhereInput
  }

  export type JobsListRelationFilter = {
    every?: jobsWhereInput
    some?: jobsWhereInput
    none?: jobsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type calendarsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type job_offersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type job_applicationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type calendar_tokensOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type sync_tokensOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type jobsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    groupId?: SortOrder
    color?: SortOrder
    avatar?: SortOrder
    password?: SortOrder
    token?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    groupId?: SortOrder
    color?: SortOrder
    avatar?: SortOrder
    password?: SortOrder
    token?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    groupId?: SortOrder
    color?: SortOrder
    avatar?: SortOrder
    password?: SortOrder
    token?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type EventsListRelationFilter = {
    every?: eventsWhereInput
    some?: eventsWhereInput
    none?: eventsWhereInput
  }

  export type eventsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type calendarsEmailUserIdCompoundUniqueInput = {
    email: string
    userId: number
  }

  export type calendarsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    userId?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
  }

  export type calendarsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type calendarsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    userId?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
  }

  export type calendarsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    userId?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
  }

  export type calendarsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type CalendarsScalarRelationFilter = {
    is?: calendarsWhereInput
    isNot?: calendarsWhereInput
  }

  export type eventsCalendarIdEventIdCompoundUniqueInput = {
    calendarId: number
    eventId: string
  }

  export type eventsCountOrderByAggregateInput = {
    id?: SortOrder
    calendarId?: SortOrder
    eventId?: SortOrder
    summary?: SortOrder
    description?: SortOrder
    creator?: SortOrder
    organizer?: SortOrder
    start?: SortOrder
    end?: SortOrder
    createdAt?: SortOrder
  }

  export type eventsAvgOrderByAggregateInput = {
    id?: SortOrder
    calendarId?: SortOrder
  }

  export type eventsMaxOrderByAggregateInput = {
    id?: SortOrder
    calendarId?: SortOrder
    eventId?: SortOrder
    summary?: SortOrder
    description?: SortOrder
    creator?: SortOrder
    organizer?: SortOrder
    start?: SortOrder
    end?: SortOrder
    createdAt?: SortOrder
  }

  export type eventsMinOrderByAggregateInput = {
    id?: SortOrder
    calendarId?: SortOrder
    eventId?: SortOrder
    summary?: SortOrder
    description?: SortOrder
    creator?: SortOrder
    organizer?: SortOrder
    start?: SortOrder
    end?: SortOrder
    createdAt?: SortOrder
  }

  export type eventsSumOrderByAggregateInput = {
    id?: SortOrder
    calendarId?: SortOrder
  }

  export type sync_tokensNameUserIdCompoundUniqueInput = {
    name: string
    userId: number
  }

  export type sync_tokensCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type sync_tokensAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type sync_tokensMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type sync_tokensMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type sync_tokensSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type job_offersCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    position?: SortOrder
    salary?: SortOrder
    jobType?: SortOrder
    source?: SortOrder
    interviews?: SortOrder
    fileURL?: SortOrder
    receivedAt?: SortOrder
    startAt?: SortOrder
    createdAt?: SortOrder
  }

  export type job_offersAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    interviews?: SortOrder
  }

  export type job_offersMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    position?: SortOrder
    salary?: SortOrder
    jobType?: SortOrder
    source?: SortOrder
    interviews?: SortOrder
    fileURL?: SortOrder
    receivedAt?: SortOrder
    startAt?: SortOrder
    createdAt?: SortOrder
  }

  export type job_offersMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    position?: SortOrder
    salary?: SortOrder
    jobType?: SortOrder
    source?: SortOrder
    interviews?: SortOrder
    fileURL?: SortOrder
    receivedAt?: SortOrder
    startAt?: SortOrder
    createdAt?: SortOrder
  }

  export type job_offersSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    interviews?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type job_applicationsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
  }

  export type job_applicationsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type job_applicationsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
  }

  export type job_applicationsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
  }

  export type job_applicationsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type jobsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    position?: SortOrder
    isActive?: SortOrder
    comments?: SortOrder
    startedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type jobsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type jobsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    position?: SortOrder
    isActive?: SortOrder
    comments?: SortOrder
    startedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type jobsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    position?: SortOrder
    isActive?: SortOrder
    comments?: SortOrder
    startedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type jobsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type calendar_tokensCountOrderByAggregateInput = {
    id?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    isRevoked?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type calendar_tokensAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type calendar_tokensMaxOrderByAggregateInput = {
    id?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    isRevoked?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type calendar_tokensMinOrderByAggregateInput = {
    id?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    isRevoked?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type calendar_tokensSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type calendarsCreateNestedManyWithoutUserInput = {
    create?: XOR<calendarsCreateWithoutUserInput, calendarsUncheckedCreateWithoutUserInput> | calendarsCreateWithoutUserInput[] | calendarsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: calendarsCreateOrConnectWithoutUserInput | calendarsCreateOrConnectWithoutUserInput[]
    createMany?: calendarsCreateManyUserInputEnvelope
    connect?: calendarsWhereUniqueInput | calendarsWhereUniqueInput[]
  }

  export type job_offersCreateNestedManyWithoutUserInput = {
    create?: XOR<job_offersCreateWithoutUserInput, job_offersUncheckedCreateWithoutUserInput> | job_offersCreateWithoutUserInput[] | job_offersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: job_offersCreateOrConnectWithoutUserInput | job_offersCreateOrConnectWithoutUserInput[]
    createMany?: job_offersCreateManyUserInputEnvelope
    connect?: job_offersWhereUniqueInput | job_offersWhereUniqueInput[]
  }

  export type job_applicationsCreateNestedManyWithoutUserInput = {
    create?: XOR<job_applicationsCreateWithoutUserInput, job_applicationsUncheckedCreateWithoutUserInput> | job_applicationsCreateWithoutUserInput[] | job_applicationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: job_applicationsCreateOrConnectWithoutUserInput | job_applicationsCreateOrConnectWithoutUserInput[]
    createMany?: job_applicationsCreateManyUserInputEnvelope
    connect?: job_applicationsWhereUniqueInput | job_applicationsWhereUniqueInput[]
  }

  export type calendar_tokensCreateNestedManyWithoutUserInput = {
    create?: XOR<calendar_tokensCreateWithoutUserInput, calendar_tokensUncheckedCreateWithoutUserInput> | calendar_tokensCreateWithoutUserInput[] | calendar_tokensUncheckedCreateWithoutUserInput[]
    connectOrCreate?: calendar_tokensCreateOrConnectWithoutUserInput | calendar_tokensCreateOrConnectWithoutUserInput[]
    createMany?: calendar_tokensCreateManyUserInputEnvelope
    connect?: calendar_tokensWhereUniqueInput | calendar_tokensWhereUniqueInput[]
  }

  export type sync_tokensCreateNestedManyWithoutUserInput = {
    create?: XOR<sync_tokensCreateWithoutUserInput, sync_tokensUncheckedCreateWithoutUserInput> | sync_tokensCreateWithoutUserInput[] | sync_tokensUncheckedCreateWithoutUserInput[]
    connectOrCreate?: sync_tokensCreateOrConnectWithoutUserInput | sync_tokensCreateOrConnectWithoutUserInput[]
    createMany?: sync_tokensCreateManyUserInputEnvelope
    connect?: sync_tokensWhereUniqueInput | sync_tokensWhereUniqueInput[]
  }

  export type jobsCreateNestedManyWithoutUserInput = {
    create?: XOR<jobsCreateWithoutUserInput, jobsUncheckedCreateWithoutUserInput> | jobsCreateWithoutUserInput[] | jobsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: jobsCreateOrConnectWithoutUserInput | jobsCreateOrConnectWithoutUserInput[]
    createMany?: jobsCreateManyUserInputEnvelope
    connect?: jobsWhereUniqueInput | jobsWhereUniqueInput[]
  }

  export type calendarsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<calendarsCreateWithoutUserInput, calendarsUncheckedCreateWithoutUserInput> | calendarsCreateWithoutUserInput[] | calendarsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: calendarsCreateOrConnectWithoutUserInput | calendarsCreateOrConnectWithoutUserInput[]
    createMany?: calendarsCreateManyUserInputEnvelope
    connect?: calendarsWhereUniqueInput | calendarsWhereUniqueInput[]
  }

  export type job_offersUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<job_offersCreateWithoutUserInput, job_offersUncheckedCreateWithoutUserInput> | job_offersCreateWithoutUserInput[] | job_offersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: job_offersCreateOrConnectWithoutUserInput | job_offersCreateOrConnectWithoutUserInput[]
    createMany?: job_offersCreateManyUserInputEnvelope
    connect?: job_offersWhereUniqueInput | job_offersWhereUniqueInput[]
  }

  export type job_applicationsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<job_applicationsCreateWithoutUserInput, job_applicationsUncheckedCreateWithoutUserInput> | job_applicationsCreateWithoutUserInput[] | job_applicationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: job_applicationsCreateOrConnectWithoutUserInput | job_applicationsCreateOrConnectWithoutUserInput[]
    createMany?: job_applicationsCreateManyUserInputEnvelope
    connect?: job_applicationsWhereUniqueInput | job_applicationsWhereUniqueInput[]
  }

  export type calendar_tokensUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<calendar_tokensCreateWithoutUserInput, calendar_tokensUncheckedCreateWithoutUserInput> | calendar_tokensCreateWithoutUserInput[] | calendar_tokensUncheckedCreateWithoutUserInput[]
    connectOrCreate?: calendar_tokensCreateOrConnectWithoutUserInput | calendar_tokensCreateOrConnectWithoutUserInput[]
    createMany?: calendar_tokensCreateManyUserInputEnvelope
    connect?: calendar_tokensWhereUniqueInput | calendar_tokensWhereUniqueInput[]
  }

  export type sync_tokensUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<sync_tokensCreateWithoutUserInput, sync_tokensUncheckedCreateWithoutUserInput> | sync_tokensCreateWithoutUserInput[] | sync_tokensUncheckedCreateWithoutUserInput[]
    connectOrCreate?: sync_tokensCreateOrConnectWithoutUserInput | sync_tokensCreateOrConnectWithoutUserInput[]
    createMany?: sync_tokensCreateManyUserInputEnvelope
    connect?: sync_tokensWhereUniqueInput | sync_tokensWhereUniqueInput[]
  }

  export type jobsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<jobsCreateWithoutUserInput, jobsUncheckedCreateWithoutUserInput> | jobsCreateWithoutUserInput[] | jobsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: jobsCreateOrConnectWithoutUserInput | jobsCreateOrConnectWithoutUserInput[]
    createMany?: jobsCreateManyUserInputEnvelope
    connect?: jobsWhereUniqueInput | jobsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type calendarsUpdateManyWithoutUserNestedInput = {
    create?: XOR<calendarsCreateWithoutUserInput, calendarsUncheckedCreateWithoutUserInput> | calendarsCreateWithoutUserInput[] | calendarsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: calendarsCreateOrConnectWithoutUserInput | calendarsCreateOrConnectWithoutUserInput[]
    upsert?: calendarsUpsertWithWhereUniqueWithoutUserInput | calendarsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: calendarsCreateManyUserInputEnvelope
    set?: calendarsWhereUniqueInput | calendarsWhereUniqueInput[]
    disconnect?: calendarsWhereUniqueInput | calendarsWhereUniqueInput[]
    delete?: calendarsWhereUniqueInput | calendarsWhereUniqueInput[]
    connect?: calendarsWhereUniqueInput | calendarsWhereUniqueInput[]
    update?: calendarsUpdateWithWhereUniqueWithoutUserInput | calendarsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: calendarsUpdateManyWithWhereWithoutUserInput | calendarsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: calendarsScalarWhereInput | calendarsScalarWhereInput[]
  }

  export type job_offersUpdateManyWithoutUserNestedInput = {
    create?: XOR<job_offersCreateWithoutUserInput, job_offersUncheckedCreateWithoutUserInput> | job_offersCreateWithoutUserInput[] | job_offersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: job_offersCreateOrConnectWithoutUserInput | job_offersCreateOrConnectWithoutUserInput[]
    upsert?: job_offersUpsertWithWhereUniqueWithoutUserInput | job_offersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: job_offersCreateManyUserInputEnvelope
    set?: job_offersWhereUniqueInput | job_offersWhereUniqueInput[]
    disconnect?: job_offersWhereUniqueInput | job_offersWhereUniqueInput[]
    delete?: job_offersWhereUniqueInput | job_offersWhereUniqueInput[]
    connect?: job_offersWhereUniqueInput | job_offersWhereUniqueInput[]
    update?: job_offersUpdateWithWhereUniqueWithoutUserInput | job_offersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: job_offersUpdateManyWithWhereWithoutUserInput | job_offersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: job_offersScalarWhereInput | job_offersScalarWhereInput[]
  }

  export type job_applicationsUpdateManyWithoutUserNestedInput = {
    create?: XOR<job_applicationsCreateWithoutUserInput, job_applicationsUncheckedCreateWithoutUserInput> | job_applicationsCreateWithoutUserInput[] | job_applicationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: job_applicationsCreateOrConnectWithoutUserInput | job_applicationsCreateOrConnectWithoutUserInput[]
    upsert?: job_applicationsUpsertWithWhereUniqueWithoutUserInput | job_applicationsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: job_applicationsCreateManyUserInputEnvelope
    set?: job_applicationsWhereUniqueInput | job_applicationsWhereUniqueInput[]
    disconnect?: job_applicationsWhereUniqueInput | job_applicationsWhereUniqueInput[]
    delete?: job_applicationsWhereUniqueInput | job_applicationsWhereUniqueInput[]
    connect?: job_applicationsWhereUniqueInput | job_applicationsWhereUniqueInput[]
    update?: job_applicationsUpdateWithWhereUniqueWithoutUserInput | job_applicationsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: job_applicationsUpdateManyWithWhereWithoutUserInput | job_applicationsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: job_applicationsScalarWhereInput | job_applicationsScalarWhereInput[]
  }

  export type calendar_tokensUpdateManyWithoutUserNestedInput = {
    create?: XOR<calendar_tokensCreateWithoutUserInput, calendar_tokensUncheckedCreateWithoutUserInput> | calendar_tokensCreateWithoutUserInput[] | calendar_tokensUncheckedCreateWithoutUserInput[]
    connectOrCreate?: calendar_tokensCreateOrConnectWithoutUserInput | calendar_tokensCreateOrConnectWithoutUserInput[]
    upsert?: calendar_tokensUpsertWithWhereUniqueWithoutUserInput | calendar_tokensUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: calendar_tokensCreateManyUserInputEnvelope
    set?: calendar_tokensWhereUniqueInput | calendar_tokensWhereUniqueInput[]
    disconnect?: calendar_tokensWhereUniqueInput | calendar_tokensWhereUniqueInput[]
    delete?: calendar_tokensWhereUniqueInput | calendar_tokensWhereUniqueInput[]
    connect?: calendar_tokensWhereUniqueInput | calendar_tokensWhereUniqueInput[]
    update?: calendar_tokensUpdateWithWhereUniqueWithoutUserInput | calendar_tokensUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: calendar_tokensUpdateManyWithWhereWithoutUserInput | calendar_tokensUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: calendar_tokensScalarWhereInput | calendar_tokensScalarWhereInput[]
  }

  export type sync_tokensUpdateManyWithoutUserNestedInput = {
    create?: XOR<sync_tokensCreateWithoutUserInput, sync_tokensUncheckedCreateWithoutUserInput> | sync_tokensCreateWithoutUserInput[] | sync_tokensUncheckedCreateWithoutUserInput[]
    connectOrCreate?: sync_tokensCreateOrConnectWithoutUserInput | sync_tokensCreateOrConnectWithoutUserInput[]
    upsert?: sync_tokensUpsertWithWhereUniqueWithoutUserInput | sync_tokensUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: sync_tokensCreateManyUserInputEnvelope
    set?: sync_tokensWhereUniqueInput | sync_tokensWhereUniqueInput[]
    disconnect?: sync_tokensWhereUniqueInput | sync_tokensWhereUniqueInput[]
    delete?: sync_tokensWhereUniqueInput | sync_tokensWhereUniqueInput[]
    connect?: sync_tokensWhereUniqueInput | sync_tokensWhereUniqueInput[]
    update?: sync_tokensUpdateWithWhereUniqueWithoutUserInput | sync_tokensUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: sync_tokensUpdateManyWithWhereWithoutUserInput | sync_tokensUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: sync_tokensScalarWhereInput | sync_tokensScalarWhereInput[]
  }

  export type jobsUpdateManyWithoutUserNestedInput = {
    create?: XOR<jobsCreateWithoutUserInput, jobsUncheckedCreateWithoutUserInput> | jobsCreateWithoutUserInput[] | jobsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: jobsCreateOrConnectWithoutUserInput | jobsCreateOrConnectWithoutUserInput[]
    upsert?: jobsUpsertWithWhereUniqueWithoutUserInput | jobsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: jobsCreateManyUserInputEnvelope
    set?: jobsWhereUniqueInput | jobsWhereUniqueInput[]
    disconnect?: jobsWhereUniqueInput | jobsWhereUniqueInput[]
    delete?: jobsWhereUniqueInput | jobsWhereUniqueInput[]
    connect?: jobsWhereUniqueInput | jobsWhereUniqueInput[]
    update?: jobsUpdateWithWhereUniqueWithoutUserInput | jobsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: jobsUpdateManyWithWhereWithoutUserInput | jobsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: jobsScalarWhereInput | jobsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type calendarsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<calendarsCreateWithoutUserInput, calendarsUncheckedCreateWithoutUserInput> | calendarsCreateWithoutUserInput[] | calendarsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: calendarsCreateOrConnectWithoutUserInput | calendarsCreateOrConnectWithoutUserInput[]
    upsert?: calendarsUpsertWithWhereUniqueWithoutUserInput | calendarsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: calendarsCreateManyUserInputEnvelope
    set?: calendarsWhereUniqueInput | calendarsWhereUniqueInput[]
    disconnect?: calendarsWhereUniqueInput | calendarsWhereUniqueInput[]
    delete?: calendarsWhereUniqueInput | calendarsWhereUniqueInput[]
    connect?: calendarsWhereUniqueInput | calendarsWhereUniqueInput[]
    update?: calendarsUpdateWithWhereUniqueWithoutUserInput | calendarsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: calendarsUpdateManyWithWhereWithoutUserInput | calendarsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: calendarsScalarWhereInput | calendarsScalarWhereInput[]
  }

  export type job_offersUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<job_offersCreateWithoutUserInput, job_offersUncheckedCreateWithoutUserInput> | job_offersCreateWithoutUserInput[] | job_offersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: job_offersCreateOrConnectWithoutUserInput | job_offersCreateOrConnectWithoutUserInput[]
    upsert?: job_offersUpsertWithWhereUniqueWithoutUserInput | job_offersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: job_offersCreateManyUserInputEnvelope
    set?: job_offersWhereUniqueInput | job_offersWhereUniqueInput[]
    disconnect?: job_offersWhereUniqueInput | job_offersWhereUniqueInput[]
    delete?: job_offersWhereUniqueInput | job_offersWhereUniqueInput[]
    connect?: job_offersWhereUniqueInput | job_offersWhereUniqueInput[]
    update?: job_offersUpdateWithWhereUniqueWithoutUserInput | job_offersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: job_offersUpdateManyWithWhereWithoutUserInput | job_offersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: job_offersScalarWhereInput | job_offersScalarWhereInput[]
  }

  export type job_applicationsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<job_applicationsCreateWithoutUserInput, job_applicationsUncheckedCreateWithoutUserInput> | job_applicationsCreateWithoutUserInput[] | job_applicationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: job_applicationsCreateOrConnectWithoutUserInput | job_applicationsCreateOrConnectWithoutUserInput[]
    upsert?: job_applicationsUpsertWithWhereUniqueWithoutUserInput | job_applicationsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: job_applicationsCreateManyUserInputEnvelope
    set?: job_applicationsWhereUniqueInput | job_applicationsWhereUniqueInput[]
    disconnect?: job_applicationsWhereUniqueInput | job_applicationsWhereUniqueInput[]
    delete?: job_applicationsWhereUniqueInput | job_applicationsWhereUniqueInput[]
    connect?: job_applicationsWhereUniqueInput | job_applicationsWhereUniqueInput[]
    update?: job_applicationsUpdateWithWhereUniqueWithoutUserInput | job_applicationsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: job_applicationsUpdateManyWithWhereWithoutUserInput | job_applicationsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: job_applicationsScalarWhereInput | job_applicationsScalarWhereInput[]
  }

  export type calendar_tokensUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<calendar_tokensCreateWithoutUserInput, calendar_tokensUncheckedCreateWithoutUserInput> | calendar_tokensCreateWithoutUserInput[] | calendar_tokensUncheckedCreateWithoutUserInput[]
    connectOrCreate?: calendar_tokensCreateOrConnectWithoutUserInput | calendar_tokensCreateOrConnectWithoutUserInput[]
    upsert?: calendar_tokensUpsertWithWhereUniqueWithoutUserInput | calendar_tokensUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: calendar_tokensCreateManyUserInputEnvelope
    set?: calendar_tokensWhereUniqueInput | calendar_tokensWhereUniqueInput[]
    disconnect?: calendar_tokensWhereUniqueInput | calendar_tokensWhereUniqueInput[]
    delete?: calendar_tokensWhereUniqueInput | calendar_tokensWhereUniqueInput[]
    connect?: calendar_tokensWhereUniqueInput | calendar_tokensWhereUniqueInput[]
    update?: calendar_tokensUpdateWithWhereUniqueWithoutUserInput | calendar_tokensUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: calendar_tokensUpdateManyWithWhereWithoutUserInput | calendar_tokensUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: calendar_tokensScalarWhereInput | calendar_tokensScalarWhereInput[]
  }

  export type sync_tokensUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<sync_tokensCreateWithoutUserInput, sync_tokensUncheckedCreateWithoutUserInput> | sync_tokensCreateWithoutUserInput[] | sync_tokensUncheckedCreateWithoutUserInput[]
    connectOrCreate?: sync_tokensCreateOrConnectWithoutUserInput | sync_tokensCreateOrConnectWithoutUserInput[]
    upsert?: sync_tokensUpsertWithWhereUniqueWithoutUserInput | sync_tokensUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: sync_tokensCreateManyUserInputEnvelope
    set?: sync_tokensWhereUniqueInput | sync_tokensWhereUniqueInput[]
    disconnect?: sync_tokensWhereUniqueInput | sync_tokensWhereUniqueInput[]
    delete?: sync_tokensWhereUniqueInput | sync_tokensWhereUniqueInput[]
    connect?: sync_tokensWhereUniqueInput | sync_tokensWhereUniqueInput[]
    update?: sync_tokensUpdateWithWhereUniqueWithoutUserInput | sync_tokensUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: sync_tokensUpdateManyWithWhereWithoutUserInput | sync_tokensUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: sync_tokensScalarWhereInput | sync_tokensScalarWhereInput[]
  }

  export type jobsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<jobsCreateWithoutUserInput, jobsUncheckedCreateWithoutUserInput> | jobsCreateWithoutUserInput[] | jobsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: jobsCreateOrConnectWithoutUserInput | jobsCreateOrConnectWithoutUserInput[]
    upsert?: jobsUpsertWithWhereUniqueWithoutUserInput | jobsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: jobsCreateManyUserInputEnvelope
    set?: jobsWhereUniqueInput | jobsWhereUniqueInput[]
    disconnect?: jobsWhereUniqueInput | jobsWhereUniqueInput[]
    delete?: jobsWhereUniqueInput | jobsWhereUniqueInput[]
    connect?: jobsWhereUniqueInput | jobsWhereUniqueInput[]
    update?: jobsUpdateWithWhereUniqueWithoutUserInput | jobsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: jobsUpdateManyWithWhereWithoutUserInput | jobsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: jobsScalarWhereInput | jobsScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutCalendarsInput = {
    create?: XOR<usersCreateWithoutCalendarsInput, usersUncheckedCreateWithoutCalendarsInput>
    connectOrCreate?: usersCreateOrConnectWithoutCalendarsInput
    connect?: usersWhereUniqueInput
  }

  export type eventsCreateNestedManyWithoutCalendarInput = {
    create?: XOR<eventsCreateWithoutCalendarInput, eventsUncheckedCreateWithoutCalendarInput> | eventsCreateWithoutCalendarInput[] | eventsUncheckedCreateWithoutCalendarInput[]
    connectOrCreate?: eventsCreateOrConnectWithoutCalendarInput | eventsCreateOrConnectWithoutCalendarInput[]
    createMany?: eventsCreateManyCalendarInputEnvelope
    connect?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
  }

  export type eventsUncheckedCreateNestedManyWithoutCalendarInput = {
    create?: XOR<eventsCreateWithoutCalendarInput, eventsUncheckedCreateWithoutCalendarInput> | eventsCreateWithoutCalendarInput[] | eventsUncheckedCreateWithoutCalendarInput[]
    connectOrCreate?: eventsCreateOrConnectWithoutCalendarInput | eventsCreateOrConnectWithoutCalendarInput[]
    createMany?: eventsCreateManyCalendarInputEnvelope
    connect?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
  }

  export type usersUpdateOneRequiredWithoutCalendarsNestedInput = {
    create?: XOR<usersCreateWithoutCalendarsInput, usersUncheckedCreateWithoutCalendarsInput>
    connectOrCreate?: usersCreateOrConnectWithoutCalendarsInput
    upsert?: usersUpsertWithoutCalendarsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutCalendarsInput, usersUpdateWithoutCalendarsInput>, usersUncheckedUpdateWithoutCalendarsInput>
  }

  export type eventsUpdateManyWithoutCalendarNestedInput = {
    create?: XOR<eventsCreateWithoutCalendarInput, eventsUncheckedCreateWithoutCalendarInput> | eventsCreateWithoutCalendarInput[] | eventsUncheckedCreateWithoutCalendarInput[]
    connectOrCreate?: eventsCreateOrConnectWithoutCalendarInput | eventsCreateOrConnectWithoutCalendarInput[]
    upsert?: eventsUpsertWithWhereUniqueWithoutCalendarInput | eventsUpsertWithWhereUniqueWithoutCalendarInput[]
    createMany?: eventsCreateManyCalendarInputEnvelope
    set?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    disconnect?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    delete?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    connect?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    update?: eventsUpdateWithWhereUniqueWithoutCalendarInput | eventsUpdateWithWhereUniqueWithoutCalendarInput[]
    updateMany?: eventsUpdateManyWithWhereWithoutCalendarInput | eventsUpdateManyWithWhereWithoutCalendarInput[]
    deleteMany?: eventsScalarWhereInput | eventsScalarWhereInput[]
  }

  export type eventsUncheckedUpdateManyWithoutCalendarNestedInput = {
    create?: XOR<eventsCreateWithoutCalendarInput, eventsUncheckedCreateWithoutCalendarInput> | eventsCreateWithoutCalendarInput[] | eventsUncheckedCreateWithoutCalendarInput[]
    connectOrCreate?: eventsCreateOrConnectWithoutCalendarInput | eventsCreateOrConnectWithoutCalendarInput[]
    upsert?: eventsUpsertWithWhereUniqueWithoutCalendarInput | eventsUpsertWithWhereUniqueWithoutCalendarInput[]
    createMany?: eventsCreateManyCalendarInputEnvelope
    set?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    disconnect?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    delete?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    connect?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    update?: eventsUpdateWithWhereUniqueWithoutCalendarInput | eventsUpdateWithWhereUniqueWithoutCalendarInput[]
    updateMany?: eventsUpdateManyWithWhereWithoutCalendarInput | eventsUpdateManyWithWhereWithoutCalendarInput[]
    deleteMany?: eventsScalarWhereInput | eventsScalarWhereInput[]
  }

  export type calendarsCreateNestedOneWithoutEventsInput = {
    create?: XOR<calendarsCreateWithoutEventsInput, calendarsUncheckedCreateWithoutEventsInput>
    connectOrCreate?: calendarsCreateOrConnectWithoutEventsInput
    connect?: calendarsWhereUniqueInput
  }

  export type calendarsUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<calendarsCreateWithoutEventsInput, calendarsUncheckedCreateWithoutEventsInput>
    connectOrCreate?: calendarsCreateOrConnectWithoutEventsInput
    upsert?: calendarsUpsertWithoutEventsInput
    connect?: calendarsWhereUniqueInput
    update?: XOR<XOR<calendarsUpdateToOneWithWhereWithoutEventsInput, calendarsUpdateWithoutEventsInput>, calendarsUncheckedUpdateWithoutEventsInput>
  }

  export type usersCreateNestedOneWithoutSync_tokensInput = {
    create?: XOR<usersCreateWithoutSync_tokensInput, usersUncheckedCreateWithoutSync_tokensInput>
    connectOrCreate?: usersCreateOrConnectWithoutSync_tokensInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutSync_tokensNestedInput = {
    create?: XOR<usersCreateWithoutSync_tokensInput, usersUncheckedCreateWithoutSync_tokensInput>
    connectOrCreate?: usersCreateOrConnectWithoutSync_tokensInput
    upsert?: usersUpsertWithoutSync_tokensInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutSync_tokensInput, usersUpdateWithoutSync_tokensInput>, usersUncheckedUpdateWithoutSync_tokensInput>
  }

  export type usersCreateNestedOneWithoutJob_offersInput = {
    create?: XOR<usersCreateWithoutJob_offersInput, usersUncheckedCreateWithoutJob_offersInput>
    connectOrCreate?: usersCreateOrConnectWithoutJob_offersInput
    connect?: usersWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type usersUpdateOneRequiredWithoutJob_offersNestedInput = {
    create?: XOR<usersCreateWithoutJob_offersInput, usersUncheckedCreateWithoutJob_offersInput>
    connectOrCreate?: usersCreateOrConnectWithoutJob_offersInput
    upsert?: usersUpsertWithoutJob_offersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutJob_offersInput, usersUpdateWithoutJob_offersInput>, usersUncheckedUpdateWithoutJob_offersInput>
  }

  export type usersCreateNestedOneWithoutJob_applicationsInput = {
    create?: XOR<usersCreateWithoutJob_applicationsInput, usersUncheckedCreateWithoutJob_applicationsInput>
    connectOrCreate?: usersCreateOrConnectWithoutJob_applicationsInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutJob_applicationsNestedInput = {
    create?: XOR<usersCreateWithoutJob_applicationsInput, usersUncheckedCreateWithoutJob_applicationsInput>
    connectOrCreate?: usersCreateOrConnectWithoutJob_applicationsInput
    upsert?: usersUpsertWithoutJob_applicationsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutJob_applicationsInput, usersUpdateWithoutJob_applicationsInput>, usersUncheckedUpdateWithoutJob_applicationsInput>
  }

  export type usersCreateNestedOneWithoutJobsInput = {
    create?: XOR<usersCreateWithoutJobsInput, usersUncheckedCreateWithoutJobsInput>
    connectOrCreate?: usersCreateOrConnectWithoutJobsInput
    connect?: usersWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type usersUpdateOneRequiredWithoutJobsNestedInput = {
    create?: XOR<usersCreateWithoutJobsInput, usersUncheckedCreateWithoutJobsInput>
    connectOrCreate?: usersCreateOrConnectWithoutJobsInput
    upsert?: usersUpsertWithoutJobsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutJobsInput, usersUpdateWithoutJobsInput>, usersUncheckedUpdateWithoutJobsInput>
  }

  export type usersCreateNestedOneWithoutCalendar_tokensInput = {
    create?: XOR<usersCreateWithoutCalendar_tokensInput, usersUncheckedCreateWithoutCalendar_tokensInput>
    connectOrCreate?: usersCreateOrConnectWithoutCalendar_tokensInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutCalendar_tokensNestedInput = {
    create?: XOR<usersCreateWithoutCalendar_tokensInput, usersUncheckedCreateWithoutCalendar_tokensInput>
    connectOrCreate?: usersCreateOrConnectWithoutCalendar_tokensInput
    upsert?: usersUpsertWithoutCalendar_tokensInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutCalendar_tokensInput, usersUpdateWithoutCalendar_tokensInput>, usersUncheckedUpdateWithoutCalendar_tokensInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type calendarsCreateWithoutUserInput = {
    name: string
    email: string
    timezone: string
    createdAt?: Date | string
    events?: eventsCreateNestedManyWithoutCalendarInput
  }

  export type calendarsUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    email: string
    timezone: string
    createdAt?: Date | string
    events?: eventsUncheckedCreateNestedManyWithoutCalendarInput
  }

  export type calendarsCreateOrConnectWithoutUserInput = {
    where: calendarsWhereUniqueInput
    create: XOR<calendarsCreateWithoutUserInput, calendarsUncheckedCreateWithoutUserInput>
  }

  export type calendarsCreateManyUserInputEnvelope = {
    data: calendarsCreateManyUserInput | calendarsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type job_offersCreateWithoutUserInput = {
    companyName: string
    position: string
    salary: string
    jobType: string
    source: string
    interviews: number
    fileURL: string
    receivedAt: Date | string
    startAt?: Date | string | null
    createdAt?: Date | string
  }

  export type job_offersUncheckedCreateWithoutUserInput = {
    id?: number
    companyName: string
    position: string
    salary: string
    jobType: string
    source: string
    interviews: number
    fileURL: string
    receivedAt: Date | string
    startAt?: Date | string | null
    createdAt?: Date | string
  }

  export type job_offersCreateOrConnectWithoutUserInput = {
    where: job_offersWhereUniqueInput
    create: XOR<job_offersCreateWithoutUserInput, job_offersUncheckedCreateWithoutUserInput>
  }

  export type job_offersCreateManyUserInputEnvelope = {
    data: job_offersCreateManyUserInput | job_offersCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type job_applicationsCreateWithoutUserInput = {
    companyName: string
    position: string
    createdAt?: Date | string
  }

  export type job_applicationsUncheckedCreateWithoutUserInput = {
    id?: number
    companyName: string
    position: string
    createdAt?: Date | string
  }

  export type job_applicationsCreateOrConnectWithoutUserInput = {
    where: job_applicationsWhereUniqueInput
    create: XOR<job_applicationsCreateWithoutUserInput, job_applicationsUncheckedCreateWithoutUserInput>
  }

  export type job_applicationsCreateManyUserInputEnvelope = {
    data: job_applicationsCreateManyUserInput | job_applicationsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type calendar_tokensCreateWithoutUserInput = {
    accessToken: string
    refreshToken: string
    type?: string
    isRevoked?: boolean
    createdAt?: Date | string
    expiresAt?: Date | string
  }

  export type calendar_tokensUncheckedCreateWithoutUserInput = {
    id?: number
    accessToken: string
    refreshToken: string
    type?: string
    isRevoked?: boolean
    createdAt?: Date | string
    expiresAt?: Date | string
  }

  export type calendar_tokensCreateOrConnectWithoutUserInput = {
    where: calendar_tokensWhereUniqueInput
    create: XOR<calendar_tokensCreateWithoutUserInput, calendar_tokensUncheckedCreateWithoutUserInput>
  }

  export type calendar_tokensCreateManyUserInputEnvelope = {
    data: calendar_tokensCreateManyUserInput | calendar_tokensCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type sync_tokensCreateWithoutUserInput = {
    name: string
    token: string
    createdAt?: Date | string
  }

  export type sync_tokensUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    token: string
    createdAt?: Date | string
  }

  export type sync_tokensCreateOrConnectWithoutUserInput = {
    where: sync_tokensWhereUniqueInput
    create: XOR<sync_tokensCreateWithoutUserInput, sync_tokensUncheckedCreateWithoutUserInput>
  }

  export type sync_tokensCreateManyUserInputEnvelope = {
    data: sync_tokensCreateManyUserInput | sync_tokensCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type jobsCreateWithoutUserInput = {
    companyName: string
    position: string
    isActive?: boolean
    comments?: string | null
    startedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type jobsUncheckedCreateWithoutUserInput = {
    id?: number
    companyName: string
    position: string
    isActive?: boolean
    comments?: string | null
    startedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type jobsCreateOrConnectWithoutUserInput = {
    where: jobsWhereUniqueInput
    create: XOR<jobsCreateWithoutUserInput, jobsUncheckedCreateWithoutUserInput>
  }

  export type jobsCreateManyUserInputEnvelope = {
    data: jobsCreateManyUserInput | jobsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type calendarsUpsertWithWhereUniqueWithoutUserInput = {
    where: calendarsWhereUniqueInput
    update: XOR<calendarsUpdateWithoutUserInput, calendarsUncheckedUpdateWithoutUserInput>
    create: XOR<calendarsCreateWithoutUserInput, calendarsUncheckedCreateWithoutUserInput>
  }

  export type calendarsUpdateWithWhereUniqueWithoutUserInput = {
    where: calendarsWhereUniqueInput
    data: XOR<calendarsUpdateWithoutUserInput, calendarsUncheckedUpdateWithoutUserInput>
  }

  export type calendarsUpdateManyWithWhereWithoutUserInput = {
    where: calendarsScalarWhereInput
    data: XOR<calendarsUpdateManyMutationInput, calendarsUncheckedUpdateManyWithoutUserInput>
  }

  export type calendarsScalarWhereInput = {
    AND?: calendarsScalarWhereInput | calendarsScalarWhereInput[]
    OR?: calendarsScalarWhereInput[]
    NOT?: calendarsScalarWhereInput | calendarsScalarWhereInput[]
    id?: IntFilter<"calendars"> | number
    name?: StringFilter<"calendars"> | string
    email?: StringFilter<"calendars"> | string
    userId?: IntFilter<"calendars"> | number
    timezone?: StringFilter<"calendars"> | string
    createdAt?: DateTimeFilter<"calendars"> | Date | string
  }

  export type job_offersUpsertWithWhereUniqueWithoutUserInput = {
    where: job_offersWhereUniqueInput
    update: XOR<job_offersUpdateWithoutUserInput, job_offersUncheckedUpdateWithoutUserInput>
    create: XOR<job_offersCreateWithoutUserInput, job_offersUncheckedCreateWithoutUserInput>
  }

  export type job_offersUpdateWithWhereUniqueWithoutUserInput = {
    where: job_offersWhereUniqueInput
    data: XOR<job_offersUpdateWithoutUserInput, job_offersUncheckedUpdateWithoutUserInput>
  }

  export type job_offersUpdateManyWithWhereWithoutUserInput = {
    where: job_offersScalarWhereInput
    data: XOR<job_offersUpdateManyMutationInput, job_offersUncheckedUpdateManyWithoutUserInput>
  }

  export type job_offersScalarWhereInput = {
    AND?: job_offersScalarWhereInput | job_offersScalarWhereInput[]
    OR?: job_offersScalarWhereInput[]
    NOT?: job_offersScalarWhereInput | job_offersScalarWhereInput[]
    id?: IntFilter<"job_offers"> | number
    userId?: IntFilter<"job_offers"> | number
    companyName?: StringFilter<"job_offers"> | string
    position?: StringFilter<"job_offers"> | string
    salary?: StringFilter<"job_offers"> | string
    jobType?: StringFilter<"job_offers"> | string
    source?: StringFilter<"job_offers"> | string
    interviews?: IntFilter<"job_offers"> | number
    fileURL?: StringFilter<"job_offers"> | string
    receivedAt?: DateTimeFilter<"job_offers"> | Date | string
    startAt?: DateTimeNullableFilter<"job_offers"> | Date | string | null
    createdAt?: DateTimeFilter<"job_offers"> | Date | string
  }

  export type job_applicationsUpsertWithWhereUniqueWithoutUserInput = {
    where: job_applicationsWhereUniqueInput
    update: XOR<job_applicationsUpdateWithoutUserInput, job_applicationsUncheckedUpdateWithoutUserInput>
    create: XOR<job_applicationsCreateWithoutUserInput, job_applicationsUncheckedCreateWithoutUserInput>
  }

  export type job_applicationsUpdateWithWhereUniqueWithoutUserInput = {
    where: job_applicationsWhereUniqueInput
    data: XOR<job_applicationsUpdateWithoutUserInput, job_applicationsUncheckedUpdateWithoutUserInput>
  }

  export type job_applicationsUpdateManyWithWhereWithoutUserInput = {
    where: job_applicationsScalarWhereInput
    data: XOR<job_applicationsUpdateManyMutationInput, job_applicationsUncheckedUpdateManyWithoutUserInput>
  }

  export type job_applicationsScalarWhereInput = {
    AND?: job_applicationsScalarWhereInput | job_applicationsScalarWhereInput[]
    OR?: job_applicationsScalarWhereInput[]
    NOT?: job_applicationsScalarWhereInput | job_applicationsScalarWhereInput[]
    id?: IntFilter<"job_applications"> | number
    userId?: IntFilter<"job_applications"> | number
    companyName?: StringFilter<"job_applications"> | string
    position?: StringFilter<"job_applications"> | string
    createdAt?: DateTimeFilter<"job_applications"> | Date | string
  }

  export type calendar_tokensUpsertWithWhereUniqueWithoutUserInput = {
    where: calendar_tokensWhereUniqueInput
    update: XOR<calendar_tokensUpdateWithoutUserInput, calendar_tokensUncheckedUpdateWithoutUserInput>
    create: XOR<calendar_tokensCreateWithoutUserInput, calendar_tokensUncheckedCreateWithoutUserInput>
  }

  export type calendar_tokensUpdateWithWhereUniqueWithoutUserInput = {
    where: calendar_tokensWhereUniqueInput
    data: XOR<calendar_tokensUpdateWithoutUserInput, calendar_tokensUncheckedUpdateWithoutUserInput>
  }

  export type calendar_tokensUpdateManyWithWhereWithoutUserInput = {
    where: calendar_tokensScalarWhereInput
    data: XOR<calendar_tokensUpdateManyMutationInput, calendar_tokensUncheckedUpdateManyWithoutUserInput>
  }

  export type calendar_tokensScalarWhereInput = {
    AND?: calendar_tokensScalarWhereInput | calendar_tokensScalarWhereInput[]
    OR?: calendar_tokensScalarWhereInput[]
    NOT?: calendar_tokensScalarWhereInput | calendar_tokensScalarWhereInput[]
    id?: IntFilter<"calendar_tokens"> | number
    accessToken?: StringFilter<"calendar_tokens"> | string
    refreshToken?: StringFilter<"calendar_tokens"> | string
    type?: StringFilter<"calendar_tokens"> | string
    userId?: IntFilter<"calendar_tokens"> | number
    isRevoked?: BoolFilter<"calendar_tokens"> | boolean
    createdAt?: DateTimeFilter<"calendar_tokens"> | Date | string
    expiresAt?: DateTimeFilter<"calendar_tokens"> | Date | string
  }

  export type sync_tokensUpsertWithWhereUniqueWithoutUserInput = {
    where: sync_tokensWhereUniqueInput
    update: XOR<sync_tokensUpdateWithoutUserInput, sync_tokensUncheckedUpdateWithoutUserInput>
    create: XOR<sync_tokensCreateWithoutUserInput, sync_tokensUncheckedCreateWithoutUserInput>
  }

  export type sync_tokensUpdateWithWhereUniqueWithoutUserInput = {
    where: sync_tokensWhereUniqueInput
    data: XOR<sync_tokensUpdateWithoutUserInput, sync_tokensUncheckedUpdateWithoutUserInput>
  }

  export type sync_tokensUpdateManyWithWhereWithoutUserInput = {
    where: sync_tokensScalarWhereInput
    data: XOR<sync_tokensUpdateManyMutationInput, sync_tokensUncheckedUpdateManyWithoutUserInput>
  }

  export type sync_tokensScalarWhereInput = {
    AND?: sync_tokensScalarWhereInput | sync_tokensScalarWhereInput[]
    OR?: sync_tokensScalarWhereInput[]
    NOT?: sync_tokensScalarWhereInput | sync_tokensScalarWhereInput[]
    id?: IntFilter<"sync_tokens"> | number
    name?: StringFilter<"sync_tokens"> | string
    token?: StringFilter<"sync_tokens"> | string
    userId?: IntFilter<"sync_tokens"> | number
    createdAt?: DateTimeFilter<"sync_tokens"> | Date | string
  }

  export type jobsUpsertWithWhereUniqueWithoutUserInput = {
    where: jobsWhereUniqueInput
    update: XOR<jobsUpdateWithoutUserInput, jobsUncheckedUpdateWithoutUserInput>
    create: XOR<jobsCreateWithoutUserInput, jobsUncheckedCreateWithoutUserInput>
  }

  export type jobsUpdateWithWhereUniqueWithoutUserInput = {
    where: jobsWhereUniqueInput
    data: XOR<jobsUpdateWithoutUserInput, jobsUncheckedUpdateWithoutUserInput>
  }

  export type jobsUpdateManyWithWhereWithoutUserInput = {
    where: jobsScalarWhereInput
    data: XOR<jobsUpdateManyMutationInput, jobsUncheckedUpdateManyWithoutUserInput>
  }

  export type jobsScalarWhereInput = {
    AND?: jobsScalarWhereInput | jobsScalarWhereInput[]
    OR?: jobsScalarWhereInput[]
    NOT?: jobsScalarWhereInput | jobsScalarWhereInput[]
    id?: IntFilter<"jobs"> | number
    userId?: IntFilter<"jobs"> | number
    companyName?: StringFilter<"jobs"> | string
    position?: StringFilter<"jobs"> | string
    isActive?: BoolFilter<"jobs"> | boolean
    comments?: StringNullableFilter<"jobs"> | string | null
    startedAt?: DateTimeNullableFilter<"jobs"> | Date | string | null
    createdAt?: DateTimeFilter<"jobs"> | Date | string
  }

  export type usersCreateWithoutCalendarsInput = {
    name: string
    groupId?: number | null
    color?: string
    avatar: string
    password: string
    token: string
    isAdmin?: boolean
    createdAt?: Date | string
    job_offers?: job_offersCreateNestedManyWithoutUserInput
    job_applications?: job_applicationsCreateNestedManyWithoutUserInput
    calendar_tokens?: calendar_tokensCreateNestedManyWithoutUserInput
    sync_tokens?: sync_tokensCreateNestedManyWithoutUserInput
    jobs?: jobsCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutCalendarsInput = {
    id?: number
    name: string
    groupId?: number | null
    color?: string
    avatar: string
    password: string
    token: string
    isAdmin?: boolean
    createdAt?: Date | string
    job_offers?: job_offersUncheckedCreateNestedManyWithoutUserInput
    job_applications?: job_applicationsUncheckedCreateNestedManyWithoutUserInput
    calendar_tokens?: calendar_tokensUncheckedCreateNestedManyWithoutUserInput
    sync_tokens?: sync_tokensUncheckedCreateNestedManyWithoutUserInput
    jobs?: jobsUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutCalendarsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutCalendarsInput, usersUncheckedCreateWithoutCalendarsInput>
  }

  export type eventsCreateWithoutCalendarInput = {
    eventId: string
    summary: string
    description: string
    creator: string
    organizer: string
    start: Date | string
    end: Date | string
    createdAt?: Date | string
  }

  export type eventsUncheckedCreateWithoutCalendarInput = {
    id?: number
    eventId: string
    summary: string
    description: string
    creator: string
    organizer: string
    start: Date | string
    end: Date | string
    createdAt?: Date | string
  }

  export type eventsCreateOrConnectWithoutCalendarInput = {
    where: eventsWhereUniqueInput
    create: XOR<eventsCreateWithoutCalendarInput, eventsUncheckedCreateWithoutCalendarInput>
  }

  export type eventsCreateManyCalendarInputEnvelope = {
    data: eventsCreateManyCalendarInput | eventsCreateManyCalendarInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutCalendarsInput = {
    update: XOR<usersUpdateWithoutCalendarsInput, usersUncheckedUpdateWithoutCalendarsInput>
    create: XOR<usersCreateWithoutCalendarsInput, usersUncheckedCreateWithoutCalendarsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutCalendarsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutCalendarsInput, usersUncheckedUpdateWithoutCalendarsInput>
  }

  export type usersUpdateWithoutCalendarsInput = {
    name?: StringFieldUpdateOperationsInput | string
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    color?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    job_offers?: job_offersUpdateManyWithoutUserNestedInput
    job_applications?: job_applicationsUpdateManyWithoutUserNestedInput
    calendar_tokens?: calendar_tokensUpdateManyWithoutUserNestedInput
    sync_tokens?: sync_tokensUpdateManyWithoutUserNestedInput
    jobs?: jobsUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutCalendarsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    color?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    job_offers?: job_offersUncheckedUpdateManyWithoutUserNestedInput
    job_applications?: job_applicationsUncheckedUpdateManyWithoutUserNestedInput
    calendar_tokens?: calendar_tokensUncheckedUpdateManyWithoutUserNestedInput
    sync_tokens?: sync_tokensUncheckedUpdateManyWithoutUserNestedInput
    jobs?: jobsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type eventsUpsertWithWhereUniqueWithoutCalendarInput = {
    where: eventsWhereUniqueInput
    update: XOR<eventsUpdateWithoutCalendarInput, eventsUncheckedUpdateWithoutCalendarInput>
    create: XOR<eventsCreateWithoutCalendarInput, eventsUncheckedCreateWithoutCalendarInput>
  }

  export type eventsUpdateWithWhereUniqueWithoutCalendarInput = {
    where: eventsWhereUniqueInput
    data: XOR<eventsUpdateWithoutCalendarInput, eventsUncheckedUpdateWithoutCalendarInput>
  }

  export type eventsUpdateManyWithWhereWithoutCalendarInput = {
    where: eventsScalarWhereInput
    data: XOR<eventsUpdateManyMutationInput, eventsUncheckedUpdateManyWithoutCalendarInput>
  }

  export type eventsScalarWhereInput = {
    AND?: eventsScalarWhereInput | eventsScalarWhereInput[]
    OR?: eventsScalarWhereInput[]
    NOT?: eventsScalarWhereInput | eventsScalarWhereInput[]
    id?: IntFilter<"events"> | number
    calendarId?: IntFilter<"events"> | number
    eventId?: StringFilter<"events"> | string
    summary?: StringFilter<"events"> | string
    description?: StringFilter<"events"> | string
    creator?: StringFilter<"events"> | string
    organizer?: StringFilter<"events"> | string
    start?: DateTimeFilter<"events"> | Date | string
    end?: DateTimeFilter<"events"> | Date | string
    createdAt?: DateTimeFilter<"events"> | Date | string
  }

  export type calendarsCreateWithoutEventsInput = {
    name: string
    email: string
    timezone: string
    createdAt?: Date | string
    user: usersCreateNestedOneWithoutCalendarsInput
  }

  export type calendarsUncheckedCreateWithoutEventsInput = {
    id?: number
    name: string
    email: string
    userId: number
    timezone: string
    createdAt?: Date | string
  }

  export type calendarsCreateOrConnectWithoutEventsInput = {
    where: calendarsWhereUniqueInput
    create: XOR<calendarsCreateWithoutEventsInput, calendarsUncheckedCreateWithoutEventsInput>
  }

  export type calendarsUpsertWithoutEventsInput = {
    update: XOR<calendarsUpdateWithoutEventsInput, calendarsUncheckedUpdateWithoutEventsInput>
    create: XOR<calendarsCreateWithoutEventsInput, calendarsUncheckedCreateWithoutEventsInput>
    where?: calendarsWhereInput
  }

  export type calendarsUpdateToOneWithWhereWithoutEventsInput = {
    where?: calendarsWhereInput
    data: XOR<calendarsUpdateWithoutEventsInput, calendarsUncheckedUpdateWithoutEventsInput>
  }

  export type calendarsUpdateWithoutEventsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutCalendarsNestedInput
  }

  export type calendarsUncheckedUpdateWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersCreateWithoutSync_tokensInput = {
    name: string
    groupId?: number | null
    color?: string
    avatar: string
    password: string
    token: string
    isAdmin?: boolean
    createdAt?: Date | string
    calendars?: calendarsCreateNestedManyWithoutUserInput
    job_offers?: job_offersCreateNestedManyWithoutUserInput
    job_applications?: job_applicationsCreateNestedManyWithoutUserInput
    calendar_tokens?: calendar_tokensCreateNestedManyWithoutUserInput
    jobs?: jobsCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutSync_tokensInput = {
    id?: number
    name: string
    groupId?: number | null
    color?: string
    avatar: string
    password: string
    token: string
    isAdmin?: boolean
    createdAt?: Date | string
    calendars?: calendarsUncheckedCreateNestedManyWithoutUserInput
    job_offers?: job_offersUncheckedCreateNestedManyWithoutUserInput
    job_applications?: job_applicationsUncheckedCreateNestedManyWithoutUserInput
    calendar_tokens?: calendar_tokensUncheckedCreateNestedManyWithoutUserInput
    jobs?: jobsUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutSync_tokensInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutSync_tokensInput, usersUncheckedCreateWithoutSync_tokensInput>
  }

  export type usersUpsertWithoutSync_tokensInput = {
    update: XOR<usersUpdateWithoutSync_tokensInput, usersUncheckedUpdateWithoutSync_tokensInput>
    create: XOR<usersCreateWithoutSync_tokensInput, usersUncheckedCreateWithoutSync_tokensInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutSync_tokensInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutSync_tokensInput, usersUncheckedUpdateWithoutSync_tokensInput>
  }

  export type usersUpdateWithoutSync_tokensInput = {
    name?: StringFieldUpdateOperationsInput | string
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    color?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calendars?: calendarsUpdateManyWithoutUserNestedInput
    job_offers?: job_offersUpdateManyWithoutUserNestedInput
    job_applications?: job_applicationsUpdateManyWithoutUserNestedInput
    calendar_tokens?: calendar_tokensUpdateManyWithoutUserNestedInput
    jobs?: jobsUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutSync_tokensInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    color?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calendars?: calendarsUncheckedUpdateManyWithoutUserNestedInput
    job_offers?: job_offersUncheckedUpdateManyWithoutUserNestedInput
    job_applications?: job_applicationsUncheckedUpdateManyWithoutUserNestedInput
    calendar_tokens?: calendar_tokensUncheckedUpdateManyWithoutUserNestedInput
    jobs?: jobsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateWithoutJob_offersInput = {
    name: string
    groupId?: number | null
    color?: string
    avatar: string
    password: string
    token: string
    isAdmin?: boolean
    createdAt?: Date | string
    calendars?: calendarsCreateNestedManyWithoutUserInput
    job_applications?: job_applicationsCreateNestedManyWithoutUserInput
    calendar_tokens?: calendar_tokensCreateNestedManyWithoutUserInput
    sync_tokens?: sync_tokensCreateNestedManyWithoutUserInput
    jobs?: jobsCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutJob_offersInput = {
    id?: number
    name: string
    groupId?: number | null
    color?: string
    avatar: string
    password: string
    token: string
    isAdmin?: boolean
    createdAt?: Date | string
    calendars?: calendarsUncheckedCreateNestedManyWithoutUserInput
    job_applications?: job_applicationsUncheckedCreateNestedManyWithoutUserInput
    calendar_tokens?: calendar_tokensUncheckedCreateNestedManyWithoutUserInput
    sync_tokens?: sync_tokensUncheckedCreateNestedManyWithoutUserInput
    jobs?: jobsUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutJob_offersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutJob_offersInput, usersUncheckedCreateWithoutJob_offersInput>
  }

  export type usersUpsertWithoutJob_offersInput = {
    update: XOR<usersUpdateWithoutJob_offersInput, usersUncheckedUpdateWithoutJob_offersInput>
    create: XOR<usersCreateWithoutJob_offersInput, usersUncheckedCreateWithoutJob_offersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutJob_offersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutJob_offersInput, usersUncheckedUpdateWithoutJob_offersInput>
  }

  export type usersUpdateWithoutJob_offersInput = {
    name?: StringFieldUpdateOperationsInput | string
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    color?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calendars?: calendarsUpdateManyWithoutUserNestedInput
    job_applications?: job_applicationsUpdateManyWithoutUserNestedInput
    calendar_tokens?: calendar_tokensUpdateManyWithoutUserNestedInput
    sync_tokens?: sync_tokensUpdateManyWithoutUserNestedInput
    jobs?: jobsUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutJob_offersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    color?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calendars?: calendarsUncheckedUpdateManyWithoutUserNestedInput
    job_applications?: job_applicationsUncheckedUpdateManyWithoutUserNestedInput
    calendar_tokens?: calendar_tokensUncheckedUpdateManyWithoutUserNestedInput
    sync_tokens?: sync_tokensUncheckedUpdateManyWithoutUserNestedInput
    jobs?: jobsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateWithoutJob_applicationsInput = {
    name: string
    groupId?: number | null
    color?: string
    avatar: string
    password: string
    token: string
    isAdmin?: boolean
    createdAt?: Date | string
    calendars?: calendarsCreateNestedManyWithoutUserInput
    job_offers?: job_offersCreateNestedManyWithoutUserInput
    calendar_tokens?: calendar_tokensCreateNestedManyWithoutUserInput
    sync_tokens?: sync_tokensCreateNestedManyWithoutUserInput
    jobs?: jobsCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutJob_applicationsInput = {
    id?: number
    name: string
    groupId?: number | null
    color?: string
    avatar: string
    password: string
    token: string
    isAdmin?: boolean
    createdAt?: Date | string
    calendars?: calendarsUncheckedCreateNestedManyWithoutUserInput
    job_offers?: job_offersUncheckedCreateNestedManyWithoutUserInput
    calendar_tokens?: calendar_tokensUncheckedCreateNestedManyWithoutUserInput
    sync_tokens?: sync_tokensUncheckedCreateNestedManyWithoutUserInput
    jobs?: jobsUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutJob_applicationsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutJob_applicationsInput, usersUncheckedCreateWithoutJob_applicationsInput>
  }

  export type usersUpsertWithoutJob_applicationsInput = {
    update: XOR<usersUpdateWithoutJob_applicationsInput, usersUncheckedUpdateWithoutJob_applicationsInput>
    create: XOR<usersCreateWithoutJob_applicationsInput, usersUncheckedCreateWithoutJob_applicationsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutJob_applicationsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutJob_applicationsInput, usersUncheckedUpdateWithoutJob_applicationsInput>
  }

  export type usersUpdateWithoutJob_applicationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    color?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calendars?: calendarsUpdateManyWithoutUserNestedInput
    job_offers?: job_offersUpdateManyWithoutUserNestedInput
    calendar_tokens?: calendar_tokensUpdateManyWithoutUserNestedInput
    sync_tokens?: sync_tokensUpdateManyWithoutUserNestedInput
    jobs?: jobsUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutJob_applicationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    color?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calendars?: calendarsUncheckedUpdateManyWithoutUserNestedInput
    job_offers?: job_offersUncheckedUpdateManyWithoutUserNestedInput
    calendar_tokens?: calendar_tokensUncheckedUpdateManyWithoutUserNestedInput
    sync_tokens?: sync_tokensUncheckedUpdateManyWithoutUserNestedInput
    jobs?: jobsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateWithoutJobsInput = {
    name: string
    groupId?: number | null
    color?: string
    avatar: string
    password: string
    token: string
    isAdmin?: boolean
    createdAt?: Date | string
    calendars?: calendarsCreateNestedManyWithoutUserInput
    job_offers?: job_offersCreateNestedManyWithoutUserInput
    job_applications?: job_applicationsCreateNestedManyWithoutUserInput
    calendar_tokens?: calendar_tokensCreateNestedManyWithoutUserInput
    sync_tokens?: sync_tokensCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutJobsInput = {
    id?: number
    name: string
    groupId?: number | null
    color?: string
    avatar: string
    password: string
    token: string
    isAdmin?: boolean
    createdAt?: Date | string
    calendars?: calendarsUncheckedCreateNestedManyWithoutUserInput
    job_offers?: job_offersUncheckedCreateNestedManyWithoutUserInput
    job_applications?: job_applicationsUncheckedCreateNestedManyWithoutUserInput
    calendar_tokens?: calendar_tokensUncheckedCreateNestedManyWithoutUserInput
    sync_tokens?: sync_tokensUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutJobsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutJobsInput, usersUncheckedCreateWithoutJobsInput>
  }

  export type usersUpsertWithoutJobsInput = {
    update: XOR<usersUpdateWithoutJobsInput, usersUncheckedUpdateWithoutJobsInput>
    create: XOR<usersCreateWithoutJobsInput, usersUncheckedCreateWithoutJobsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutJobsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutJobsInput, usersUncheckedUpdateWithoutJobsInput>
  }

  export type usersUpdateWithoutJobsInput = {
    name?: StringFieldUpdateOperationsInput | string
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    color?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calendars?: calendarsUpdateManyWithoutUserNestedInput
    job_offers?: job_offersUpdateManyWithoutUserNestedInput
    job_applications?: job_applicationsUpdateManyWithoutUserNestedInput
    calendar_tokens?: calendar_tokensUpdateManyWithoutUserNestedInput
    sync_tokens?: sync_tokensUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutJobsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    color?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calendars?: calendarsUncheckedUpdateManyWithoutUserNestedInput
    job_offers?: job_offersUncheckedUpdateManyWithoutUserNestedInput
    job_applications?: job_applicationsUncheckedUpdateManyWithoutUserNestedInput
    calendar_tokens?: calendar_tokensUncheckedUpdateManyWithoutUserNestedInput
    sync_tokens?: sync_tokensUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateWithoutCalendar_tokensInput = {
    name: string
    groupId?: number | null
    color?: string
    avatar: string
    password: string
    token: string
    isAdmin?: boolean
    createdAt?: Date | string
    calendars?: calendarsCreateNestedManyWithoutUserInput
    job_offers?: job_offersCreateNestedManyWithoutUserInput
    job_applications?: job_applicationsCreateNestedManyWithoutUserInput
    sync_tokens?: sync_tokensCreateNestedManyWithoutUserInput
    jobs?: jobsCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutCalendar_tokensInput = {
    id?: number
    name: string
    groupId?: number | null
    color?: string
    avatar: string
    password: string
    token: string
    isAdmin?: boolean
    createdAt?: Date | string
    calendars?: calendarsUncheckedCreateNestedManyWithoutUserInput
    job_offers?: job_offersUncheckedCreateNestedManyWithoutUserInput
    job_applications?: job_applicationsUncheckedCreateNestedManyWithoutUserInput
    sync_tokens?: sync_tokensUncheckedCreateNestedManyWithoutUserInput
    jobs?: jobsUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutCalendar_tokensInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutCalendar_tokensInput, usersUncheckedCreateWithoutCalendar_tokensInput>
  }

  export type usersUpsertWithoutCalendar_tokensInput = {
    update: XOR<usersUpdateWithoutCalendar_tokensInput, usersUncheckedUpdateWithoutCalendar_tokensInput>
    create: XOR<usersCreateWithoutCalendar_tokensInput, usersUncheckedCreateWithoutCalendar_tokensInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutCalendar_tokensInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutCalendar_tokensInput, usersUncheckedUpdateWithoutCalendar_tokensInput>
  }

  export type usersUpdateWithoutCalendar_tokensInput = {
    name?: StringFieldUpdateOperationsInput | string
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    color?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calendars?: calendarsUpdateManyWithoutUserNestedInput
    job_offers?: job_offersUpdateManyWithoutUserNestedInput
    job_applications?: job_applicationsUpdateManyWithoutUserNestedInput
    sync_tokens?: sync_tokensUpdateManyWithoutUserNestedInput
    jobs?: jobsUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutCalendar_tokensInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    color?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calendars?: calendarsUncheckedUpdateManyWithoutUserNestedInput
    job_offers?: job_offersUncheckedUpdateManyWithoutUserNestedInput
    job_applications?: job_applicationsUncheckedUpdateManyWithoutUserNestedInput
    sync_tokens?: sync_tokensUncheckedUpdateManyWithoutUserNestedInput
    jobs?: jobsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type calendarsCreateManyUserInput = {
    id?: number
    name: string
    email: string
    timezone: string
    createdAt?: Date | string
  }

  export type job_offersCreateManyUserInput = {
    id?: number
    companyName: string
    position: string
    salary: string
    jobType: string
    source: string
    interviews: number
    fileURL: string
    receivedAt: Date | string
    startAt?: Date | string | null
    createdAt?: Date | string
  }

  export type job_applicationsCreateManyUserInput = {
    id?: number
    companyName: string
    position: string
    createdAt?: Date | string
  }

  export type calendar_tokensCreateManyUserInput = {
    id?: number
    accessToken: string
    refreshToken: string
    type?: string
    isRevoked?: boolean
    createdAt?: Date | string
    expiresAt?: Date | string
  }

  export type sync_tokensCreateManyUserInput = {
    id?: number
    name: string
    token: string
    createdAt?: Date | string
  }

  export type jobsCreateManyUserInput = {
    id?: number
    companyName: string
    position: string
    isActive?: boolean
    comments?: string | null
    startedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type calendarsUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: eventsUpdateManyWithoutCalendarNestedInput
  }

  export type calendarsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: eventsUncheckedUpdateManyWithoutCalendarNestedInput
  }

  export type calendarsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type job_offersUpdateWithoutUserInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    salary?: StringFieldUpdateOperationsInput | string
    jobType?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    interviews?: IntFieldUpdateOperationsInput | number
    fileURL?: StringFieldUpdateOperationsInput | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type job_offersUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    salary?: StringFieldUpdateOperationsInput | string
    jobType?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    interviews?: IntFieldUpdateOperationsInput | number
    fileURL?: StringFieldUpdateOperationsInput | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type job_offersUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    salary?: StringFieldUpdateOperationsInput | string
    jobType?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    interviews?: IntFieldUpdateOperationsInput | number
    fileURL?: StringFieldUpdateOperationsInput | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type job_applicationsUpdateWithoutUserInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type job_applicationsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type job_applicationsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type calendar_tokensUpdateWithoutUserInput = {
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type calendar_tokensUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type calendar_tokensUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sync_tokensUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sync_tokensUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sync_tokensUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type jobsUpdateWithoutUserInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type jobsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type jobsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type eventsCreateManyCalendarInput = {
    id?: number
    eventId: string
    summary: string
    description: string
    creator: string
    organizer: string
    start: Date | string
    end: Date | string
    createdAt?: Date | string
  }

  export type eventsUpdateWithoutCalendarInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    creator?: StringFieldUpdateOperationsInput | string
    organizer?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type eventsUncheckedUpdateWithoutCalendarInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    creator?: StringFieldUpdateOperationsInput | string
    organizer?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type eventsUncheckedUpdateManyWithoutCalendarInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    creator?: StringFieldUpdateOperationsInput | string
    organizer?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}