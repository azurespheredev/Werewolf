-- CreateTable
CREATE TABLE "calendar_tokens" (
    "id" SERIAL NOT NULL,
    "accessToken" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "calendar_tokens_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "calendar_tokens_accessToken_key" ON "calendar_tokens"("accessToken");

-- AddForeignKey
ALTER TABLE "calendar_tokens" ADD CONSTRAINT "calendar_tokens_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
