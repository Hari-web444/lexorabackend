DELIMITER $$
-- DROP PROCEDURE IF EXISTS sp_get_dashboardgraph;
CREATE PROCEDURE sp_get_dashboardgraph(
    IN p_id INT(11)
)
BEGIN

    SELECT 
        investor_id, return_month, SUM(amount), status
    FROM
        returns
    WHERE
        investor_id = p_id 
    GROUP BY investor_id , return_month, status;
    
END$$
DELIMITER ; 