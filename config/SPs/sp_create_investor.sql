DELIMITER $$
-- DROP PROCEDURE IF EXISTS sp_create_investor;
CREATE PROCEDURE sp_create_investor(

    IN p_full_name VARCHAR(255),
    IN p_father_spouse_name VARCHAR(255),
    IN p_date_of_birth DATE,
    IN p_gender VARCHAR(20),
    IN p_nationality VARCHAR(100),
    IN p_residential_status VARCHAR(100),
    IN p_occupation VARCHAR(100),
    IN p_income_range VARCHAR(100),
    IN p_mobile VARCHAR(20),
    IN p_email VARCHAR(255),
    IN p_perm_address TEXT,
    IN p_curr_address TEXT,
    IN p_city VARCHAR(100),
    IN p_state VARCHAR(100),
    IN p_pin VARCHAR(20),
    IN p_pan VARCHAR(20),
    IN p_aadhaar_last4 VARCHAR(4),
    IN p_bank_account VARCHAR(50),
    IN p_ifsc VARCHAR(20),
    IN p_investment_purpose VARCHAR(255),
    IN p_investment_horizon VARCHAR(100),
    IN p_fund_source VARCHAR(255),
    IN p_inv_amount Decimal(10,2),
    IN p_payment_mode VARCHAR(100),
    IN p_nom_name VARCHAR(255),
    IN p_nom_relationship VARCHAR(100),
    IN p_nom_dob DATE,
    IN p_nom_phone VARCHAR(20),
    IN p_nom_address TEXT,
    IN p_status VARCHAR(20),
    IN p_refered_by VARCHAR(50),
    IN p_ref_status VARCHAR(50),
    IN p_ref_reward VARCHAR(50),
    IN p_created_by INT,
    IN p_investor_id VARCHAR(100),
    IN p_inv_date DATE
)

BEGIN
    DECLARE v_password VARCHAR(20);
    DECLARE v_password_hash VARCHAR(255);

    SET v_password = UPPER(
        SUBSTRING(
            REPLACE(UUID(), '-', ''),
            1,
            10
        )
    );

    SET v_password_hash = SHA2(v_password, 256);

    INSERT INTO investors
    (
        investor_id,
        full_name,
        father_spouse_name,
        date_of_birth,
        gender,
        nationality,
        residential_status,
        occupation,
        income_range,
        mobile,
        email,
        perm_address,
        curr_address,
        city,
        state,
        pin,
        pan,
        aadhaar_last4,
        bank_account,
        ifsc,
        investment_purpose,
        investment_horizon,
        fund_source,
        total_invesment,
        payment_mode,
        nom_name,
        nom_relationship,
        nom_dob,
        nom_phone,
        nom_address,
        status,
        portal_password,
        created_at,
        created_by,
        isdeleted,
        refered_by,
        ref_status,
        ref_reward,
        invesment_date
    )
    VALUES
    (
        p_investor_id,
        p_full_name,
        p_father_spouse_name,
        p_date_of_birth,
        p_gender,
        p_nationality,
        p_residential_status,
        p_occupation,
        p_income_range,
        p_mobile,
        p_email,
        p_perm_address,
        p_curr_address,
        p_city,
        p_state,
        p_pin,
        p_pan,
        p_aadhaar_last4,
        p_bank_account,
        p_ifsc,
        p_investment_purpose,
        p_investment_horizon,
        p_fund_source,
        p_inv_amount,
        p_payment_mode,
        p_nom_name,
        p_nom_relationship,
        p_nom_dob,
        p_nom_phone,
        p_nom_address,
        p_status,
        v_password_hash,
        NOW(),
        p_created_by,
        0,
        p_refered_by ,
        p_ref_status ,
        p_ref_reward ,
        p_inv_date
    );

    SELECT
        LAST_INSERT_ID() AS id,
        p_investor_id AS investor_id,
        v_password  AS v_password,
        p_email       AS email,
        'Investor created successfully' AS message;

END$$

DELIMITER ;