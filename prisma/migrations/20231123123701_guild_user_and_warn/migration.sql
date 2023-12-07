-- CreateTable
CREATE TABLE `GuildUser` (
    `userId` VARCHAR(191) NOT NULL,
    `guildId` VARCHAR(191) NOT NULL,
    `exp` DOUBLE NULL DEFAULT 0,
    `level` INTEGER NULL DEFAULT 0,
    `biography` VARCHAR(191) NULL,

    PRIMARY KEY (`userId`, `guildId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Warn` (
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `reason` VARCHAR(191) NULL,
    `userId` VARCHAR(191) NOT NULL,
    `guildId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`createdAt`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Warn` ADD CONSTRAINT `Warn_userId_guildId_fkey` FOREIGN KEY (`userId`, `guildId`) REFERENCES `GuildUser`(`userId`, `guildId`) ON DELETE RESTRICT ON UPDATE CASCADE;
