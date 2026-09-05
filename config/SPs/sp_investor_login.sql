DELIMITER $$
-- DROP PROCEDURE IF EXISTS sp_investor_login ;
CREATE PROCEDURE sp_investor_login (
  IN p_inv_id VARCHAR(255),
  IN p_password VARCHAR(255)
)
BEGIN

    SELECT
        id,
        investor_id,
        full_name,
        email,
        mobile,
        status
    FROM investors
    WHERE investor_id = p_inv_id
      AND portal_password = SHA2(p_password, 256)
      AND isdeleted = 0;

END $$

DELIMITER ;