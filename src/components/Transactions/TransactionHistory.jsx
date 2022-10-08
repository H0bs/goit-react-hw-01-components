import { PropTypes } from "prop-types"
import { Table, Thead, Tbody, Tr } from "./TransactionHistory.styled"

export const TransactionHistory = ({ items }) => {
    return (
        <Table>
            <Thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </Thead>

            <Tbody>
                {items.map(item => (
                    <Tr key ={item.id}>
                        <td>{item.type}</td>
                        <td>{item.amount}</td>
                        <td>{item.currency}</td>
                    </Tr>
                ))}

            </Tbody>
        </Table>
    )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  )
}