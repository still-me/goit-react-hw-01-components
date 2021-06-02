import React from "react";
import PropTypes from "prop-types";

import styles from "./Statistics.module.css";
import randomColor from "./randomColor";

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    <h2 className={styles.title}>{title}</h2>

    <ul className={styles.statList}>
      {stats.map(({ id, label, percentage }) => (
        <StatisticsItem key={id} label={label} percentage={percentage} />
      ))}
    </ul>
  </section>
);

const StatisticsItem = ({ id, label, percentage }) => (
  <li
    key={id}
    className={styles.statItem}
    style={{ backgroundColor: randomColor() }}
  >
    <span className={styles.label}>{label}</span>
    <span className={styles.percentage}>{percentage} %</span>
  </li>
);

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ),
};

export default Statistics;
