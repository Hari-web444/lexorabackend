DELIMITER $$
-- DROP PROCEDURE IF EXISTS sp_get_dashboardportfolio;
CREATE PROCEDURE sp_get_dashboardportfolio(
    IN p_id INT(11)
)
BEGIN

    SELECT 
          id                  AS id
        , investor_id         AS investor_id
        , full_name           AS full_name
        , email               AS email
        , total_invesment     AS total_invesment
        , status              AS status
        , DATE_FORMAT(created_at, '%b %Y %d')          AS created_at
        , ROUND((total_invesment * 1.5 / 100), 2)     AS mon_return
    FROM
        investors WHERE id = p_id;
    
END$$
DELIMITER ; 