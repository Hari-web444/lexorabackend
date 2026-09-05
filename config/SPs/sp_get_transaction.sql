DELIMITER $$
-- DROP PROCEDURE IF EXISTS sp_get_transaction;
CREATE PROCEDURE sp_get_transaction(
    IN p_id INT(11)
) 
BEGIN
     
    SELECT total_invesment, created_at , invesment_date FROM investors WHERE id = p_id;
    SELECT * FROM returns WHERE investor_id = p_id ORDER BY 1 DESC;

END$$

DELIMITER ;