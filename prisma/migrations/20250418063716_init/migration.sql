-- CreateTable
CREATE TABLE "job_offers" (
    "id" SERIAL NOT NULL,
    "companyName" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "salary" TEXT NOT NULL,
    "jobType" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "interviews" INTEGER NOT NULL,
    "fileURL" TEXT NOT NULL,
    "receivedAt" TIMESTAMP(3) NOT NULL,
    "startAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "job_offers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "job_applications" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "companyName" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "job_applications_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "job_offers_companyName_key" ON "job_offers"("companyName");
