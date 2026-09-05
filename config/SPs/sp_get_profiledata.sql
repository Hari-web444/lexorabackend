DELIMITER $$
-- DROP PROCEDURE IF EXISTS sp_get_profiledata;
CREATE PROCEDURE sp_get_profiledata(
    IN p_id INT(11)
) 
BEGIN
     
    SELECT * FROM investors WHERE id = p_id LIMIT 1;

END$$

DELIMITER ;