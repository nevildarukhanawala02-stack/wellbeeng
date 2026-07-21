CREATE TABLE `leads` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`mobile` varchar(20) NOT NULL,
	`email` varchar(320) NOT NULL,
	`companyName` varchar(255) NOT NULL,
	`designation` varchar(255) NOT NULL,
	`leadMagnetType` varchar(100) NOT NULL DEFAULT 'ceo-intel-playbook',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `leads_id` PRIMARY KEY(`id`)
);
