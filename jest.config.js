module.exports = {
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
	testPathIgnorePatterns: ["examples", "dist"]
}
