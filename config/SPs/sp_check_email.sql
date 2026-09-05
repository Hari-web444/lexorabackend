DELIMITER $$
-- DROP PROCEDURE IF EXISTS sp_check_email;
CREATE PROCEDURE sp_check_email(
    IN p_email VARCHAR(100)
)
BEGIN
    SELECT id,investor_id,email
    FROM investors
    WHERE email = p_email;
END$$

DELIMITER ;