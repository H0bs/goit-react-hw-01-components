import { PropTypes } from "prop-types"
import { Section, Title, StatsList, StatsItem, Label, Percentage, GetRandomHexColor } from "./Statistics.styled"

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && (<Title>{ title}</Title>)}

      <StatsList>
        {stats.map(stat => (
        <StatsItem key={stat.id} style = {{backgroundColor: GetRandomHexColor()}} >
            <Label>{stat.label}</Label>
            <Percentage>{stat.percentage}%</Percentage>
        </StatsItem>
        ))}    
      </StatsList>
  </Section>
    )   
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
}