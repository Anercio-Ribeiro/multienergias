-- DropIndex
DROP INDEX "products_slug_key";

-- AlterTable
ALTER TABLE "products" ALTER COLUMN "order" DROP DEFAULT,
ALTER COLUMN "color" DROP DEFAULT,
ALTER COLUMN "lightColor" DROP DEFAULT,
ALTER COLUMN "iconIndex" DROP DEFAULT;
