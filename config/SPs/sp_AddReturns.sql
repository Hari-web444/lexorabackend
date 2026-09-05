DELIMITER $$

-- DROP PROCEDURE IF EXISTS sp_AddReturns $$

CREATE PROCEDURE sp_AddReturns
(
    IN p_investor_id VARCHAR(20),
    IN p_property_id INT,
    IN p_return_month VARCHAR(7),
    IN p_amount DECIMAL(12,2),
    IN p_payment_date DATE,
    IN p_payment_mode VARCHAR(50),
    IN p_reference_no VARCHAR(100),
    IN p_status VARCHAR(20),
    IN p_created_by VARCHAR(100)
)
BEGIN

    INSERT INTO returns
    (
        investor_id,
        property_id,
        return_month,
        amount,
        payment_date,
        payment_mode,
        reference_no,
        status,
        created_by
    )
    VALUES
    (
        p_investor_id,
        p_property_id,
        p_return_month,
        p_amount,
        p_payment_date,
        p_payment_mode,
        p_reference_no,
        p_status,
        p_created_by
    );

    SELECT
        LAST_INSERT_ID() AS return_id,
        'Return entry added successfully.' AS message;

END $$

DELIMITER ;