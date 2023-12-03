-- CreateTable
CREATE TABLE "dataset" (
    "id" SERIAL NOT NULL,
    "id_product" INTEGER NOT NULL,
    "Region" INTEGER NOT NULL,
    "Country" INTEGER NOT NULL,
    "Zone" INTEGER NOT NULL,
    "Year" INTEGER NOT NULL,
    "Quarter_cumulated" INTEGER NOT NULL,
    "Quarter" INTEGER NOT NULL,
    "Month_1" INTEGER NOT NULL,
    "Month_2" INTEGER NOT NULL,
    "Month_3" INTEGER NOT NULL,
    "Month_4" INTEGER NOT NULL,

    CONSTRAINT "dataset_pkey" PRIMARY KEY ("id")
);
