-- CreateTable
CREATE TABLE "rooms" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "admin" TEXT NOT NULL,
    "users" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "rooms_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "rooms_code_key" ON "rooms"("code");
