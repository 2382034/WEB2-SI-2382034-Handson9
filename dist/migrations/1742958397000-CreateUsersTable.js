"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUsersTable1742958397000 = void 0;
class CreateUsersTable1742958397000 {
    async up(queryRunner) {
        await queryRunner.query(`
                CREATE TABLE users (
                id SERIAL PRIMARY KEY,
                username VARCHAR(50) UNIQUE NOT NULL,
                email VARCHAR(100) UNIQUE NOT NULL,
                password_hash TEXT NOT NULL,
                profile_picture TEXT,
                bio TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                );`);
    }
    async down(queryRunner) {
        await queryRunner.query('DROP TABLE users');
    }
}
exports.CreateUsersTable1742958397000 = CreateUsersTable1742958397000;
//# sourceMappingURL=1742958397000-CreateUsersTable.js.map