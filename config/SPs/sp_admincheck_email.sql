DELIMITER $$
-- DROP PROCEDURE IF EXISTS sp_admincheck_email;
CREATE PROCEDURE sp_admincheck_email(
    IN p_email VARCHAR(100)
)
BEGIN
    SELECT id,email
    FROM admin_users
    WHERE email = p_email;
END$$

DELIMITER ;