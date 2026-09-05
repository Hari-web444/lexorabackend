DELIMITER $$

-- DROP PROCEDURE IF EXISTS sp_UpdateReturn $$

CREATE PROCEDURE sp_UpdateReturn
(
    IN p_id INT,
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

    UPDATE returns
    SET
        investor_id    = p_investor_id,
        property_id    = p_property_id,
        return_month   = p_return_month,
        amount         = p_amount,
        payment_date   = p_payment_date,
        payment_mode   = p_payment_mode,
        reference_no   = p_reference_no,
        status         = p_status,
        created_by     = p_created_by
    WHERE id = p_id;

    SELECT
        id,
        'Return updated successfully.' AS message
    FROM returns
    WHERE id = p_id;

END $$

DELIMITER ;