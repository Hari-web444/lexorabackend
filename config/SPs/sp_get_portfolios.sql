DELIMITER $$
-- DROP PROCEDURE IF EXISTS sp_get_portfolios;
CREATE PROCEDURE sp_get_portfolios(
    IN p_id INT(11)
) 
BEGIN
     
    select * from returns WHERE investor_id = p_id;

END$$

DELIMITER ;