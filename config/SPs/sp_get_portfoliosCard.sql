DELIMITER $$
-- DROP PROCEDURE IF EXISTS sp_get_portfoliosCard;
CREATE PROCEDURE sp_get_portfoliosCard(
    IN p_id INT(11)
)
BEGIN
    SELECT
        (SELECT total_invesment FROM investors WHERE id = p_id )                           AS total_invesment,
        (SELECT SUM(amount) FROM returns WHERE investor_id = p_id AND status = "Paid")     AS combin_month_ret,
        (SELECT (count(id)*1.5) FROM returns WHERE investor_id = p_id AND status = "Paid") AS growth_rate,
        (SELECT count(id) FROM returns WHERE investor_id = p_id AND status = "Paid")       AS paid_month;

END$$

DELIMITER ;