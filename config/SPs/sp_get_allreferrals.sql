DELIMITER $$
-- DROP PROCEDURE IF EXISTS sp_get_allreferrals;
CREATE PROCEDURE sp_get_allreferrals(
    IN p_inv_id VARCHAR(100)
)
BEGIN
   
    SELECT 
        *
    FROM
        investors
    WHERE
        refered_by = p_inv_id;

END$$

DELIMITER ;