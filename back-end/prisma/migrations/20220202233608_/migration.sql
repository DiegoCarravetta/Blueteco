-- CreateTable
CREATE TABLE "menu" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "userId" TEXT,

    CONSTRAINT "menu_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "menu" ADD CONSTRAINT "menu_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
