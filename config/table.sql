CREATE TABLE investors (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    investor_id VARCHAR(20) NOT NULL,

    full_name VARCHAR(255) NOT NULL,
    father_spouse_name VARCHAR(255),
    date_of_birth DATE,

    gender ENUM('Male', 'Female', 'Other'),
    nationality VARCHAR(100),
    residential_status ENUM('Resident Indian', 'NRI', 'Foreign National'),

    occupation VARCHAR(100),
    income_range VARCHAR(50),

    mobile VARCHAR(15),
    email VARCHAR(255),

    perm_address TEXT,
    curr_address TEXT,

    city VARCHAR(100),
    state VARCHAR(100),
    pin VARCHAR(6),

    pan VARCHAR(10),
    aadhaar_last4 VARCHAR(4),

    bank_account VARCHAR(50),
    ifsc VARCHAR(11),

    investment_purpose VARCHAR(255),
    investment_horizon VARCHAR(100),
    fund_source VARCHAR(255),
    payment_mode VARCHAR(100),

    nom_name VARCHAR(255),
    nom_relationship VARCHAR(100),
    nom_dob DATE,
    nom_phone VARCHAR(15),
    nom_address TEXT,

    status ENUM('Active', 'On Hold', 'Exited') DEFAULT 'Active',

    portal_password VARCHAR(255),

    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    created_by VARCHAR(100),

    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    isdeleted TINYINT(1) NOT NULL DEFAULT 0,

    PRIMARY KEY (investor_recid),

    UNIQUE KEY uk_investor_id (investor_id),
    UNIQUE KEY uk_pan (pan),
    UNIQUE KEY uk_email (email),
    UNIQUE KEY uk_mobile (mobile)
);



CREATE INDEX idx_full_name ON investors(full_name);
CREATE INDEX idx_status ON investors(status);
CREATE INDEX idx_isdeleted ON investors(isdeleted);


CREATE TABLE admin_users (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    admin_id CHAR(36) NULL,             

    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL, 

    role ENUM('Super Admin', 'Manager', 'Accountant') NOT NULL DEFAULT 'Manager',

    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    isdeleted TINYINT(1) NOT NULL DEFAULT 0,

    last_login DATETIME NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    INDEX idx_email (email),
    INDEX idx_role (role),
    INDEX idx_active (is_active)
);

ALTER TABLE returns
CHANGE COLUMN investor_id investor_id INT NOT NULL;

ALTER TABLE `lexora_log`.`properties` 
ADD COLUMN `interest_rate` DECIMAL(5,2) NULL DEFAULT NULL AFTER `property_type`,
CHANGE COLUMN `status` `status` ENUM('Active', 'In Active', 'Upcoming') NOT NULL DEFAULT 'Active' ;

ALTER TABLE `lexora_log`.`properties` 
ADD COLUMN `launch_date` DATETIME NULL DEFAULT CURRENT_TIMESTAMP AFTER `created_at`;

ALTER TABLE `lexora_log`.`properties` 
ADD COLUMN `phase` ENUM('One', 'Two', 'Three') NULL DEFAULT NULL AFTER `launch_date`;

ALTER TABLE `lexora_log`.`properties` 
ADD COLUMN `created_by` INT(11) NULL DEFAULT NULL AFTER `phase`;

CREATE TABLE IF NOT EXISTS admin_message (
    id           INT AUTO_INCREMENT PRIMARY KEY,
    subject      VARCHAR(255) NOT NULL,
    message      TEXT NOT NULL,         
    investor_id  INT NOT NULL,
    created_at   DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_admin_message_investor
        FOREIGN KEY (investor_id) REFERENCES investors(id)
        ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

ALTER TABLE `investors` 
ADD COLUMN `refered_by` INT(11) NULL DEFAULT NULL AFTER `total_invesment`,
ADD COLUMN `ref_status` ENUM('Invested', 'Pending', 'Hold') NULL DEFAULT 'Invested' AFTER `refered_by`,
ADD COLUMN `ref_reward` ENUM('Paid', 'Pending', 'Hold') NULL DEFAULT 'Pending' AFTER `ref_status`;
ALTER TABLE `investors` 
CHANGE COLUMN `refered_by` `refered_by` VARCHAR(50) NULL DEFAULT NULL ;

ALTER TABLE `investors` 
ADD COLUMN `invesment_date` DATETIME NULL DEFAULT CURRENT_TIMESTAMP AFTER `ref_reward`;

-- --
CREATE TABLE faqs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    question TEXT NOT NULL,
    answer TEXT NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO faqs (question, answer) VALUES
(
    'When are monthly returns credited?',
    'Returns are processed between the 1st and 5th of every month for the previous month''s earnings.'
),
(
    'Can I withdraw before the lock-in period ends?',
    'Early exits are evaluated case by case. Reach out to your relationship manager to discuss options.'
),
(
    'How is current portfolio value calculated?',
    'We apply a fixed annual appreciation rate to your invested amount, compounding once per completed year since your investment date.'
),
(
    'How do I update my contact details?',
    'Contact the support team via support ticket or WhatsApp. Our team will update your details within 24 hours.'
);