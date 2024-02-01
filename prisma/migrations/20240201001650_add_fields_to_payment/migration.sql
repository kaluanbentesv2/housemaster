-- DropForeignKey
ALTER TABLE "HousePayment" DROP CONSTRAINT "HousePayment_houseId_fkey";

-- AlterTable
ALTER TABLE "HousePayment" ADD COLUMN     "amount" DECIMAL(65,30),
ADD COLUMN     "number" TEXT,
ADD COLUMN     "owner" TEXT,
ADD COLUMN     "street" TEXT,
ADD COLUMN     "type" TEXT;

-- AddForeignKey
ALTER TABLE "HousePayment" ADD CONSTRAINT "HousePayment_houseId_fkey" FOREIGN KEY ("houseId") REFERENCES "House"("id") ON DELETE SET NULL ON UPDATE CASCADE;
