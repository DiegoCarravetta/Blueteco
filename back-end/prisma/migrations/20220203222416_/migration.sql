-- CreateTable
CREATE TABLE "Mesa" (
    "id" TEXT NOT NULL,
    "table" INTEGER NOT NULL,
    "places" INTEGER NOT NULL,
    "start" TIMESTAMP(3) NOT NULL,
    "end" TIMESTAMP(3) NOT NULL,
    "userId" TEXT,
    "menuId" TEXT,

    CONSTRAINT "Mesa_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Mesa" ADD CONSTRAINT "Mesa_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mesa" ADD CONSTRAINT "Mesa_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "menu"("id") ON DELETE SET NULL ON UPDATE CASCADE;
