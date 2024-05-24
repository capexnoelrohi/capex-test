CREATE TABLE `cpx_post` (
	`id` serial AUTO_INCREMENT,
	`created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP(),
	`updated_at` timestamp NOT NULL ON UPDATE CURRENT_TIMESTAMP,
	`title` varchar(255) NOT NULL,
	`content` varchar(255) NOT NULL,
	`created_by` bigint NOT NULL
);
--> statement-breakpoint
CREATE TABLE `cpx_user` (
	`id` serial AUTO_INCREMENT,
	`created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP(),
	`updated_at` timestamp NOT NULL ON UPDATE CURRENT_TIMESTAMP,
	`name` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL
);
