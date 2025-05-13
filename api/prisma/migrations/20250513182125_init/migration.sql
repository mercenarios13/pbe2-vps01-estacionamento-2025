-- CreateTable
CREATE TABLE "Veiculo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "placa" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "cor" TEXT,
    "ano" INTEGER
);

-- CreateTable
CREATE TABLE "Estadia" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "entrada" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "saida" DATETIME,
    "valorTotal" REAL,
    "veiculoId" INTEGER NOT NULL,
    CONSTRAINT "Estadia_veiculoId_fkey" FOREIGN KEY ("veiculoId") REFERENCES "Veiculo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Veiculo_placa_key" ON "Veiculo"("placa");
