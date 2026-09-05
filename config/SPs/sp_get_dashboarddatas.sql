DELIMITER $$
-- DROP PROCEDURE IF EXISTS sp_get_dashboarddatas;
CREATE PROCEDURE sp_get_dashboarddatas(
    IN p_id INT(11)
)
BEGIN

    SELECT 
    
    (SELECT total_invesment FROM investors WHERE id = p_id) AS total_invesment ,
    (SELECT SUM(amount) FROM returns WHERE investor_id = p_id AND status = "Paid") AS ret_amount ,
    (SELECT SUM(amount)
        FROM returns
        WHERE investor_id = p_id AND status = "Paid"
        AND return_month = DATE_FORMAT(CURDATE(), '%Y-%m')) AS cur_month_retamount ;

END$$
DELIMITER ; 