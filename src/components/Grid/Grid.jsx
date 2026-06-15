import { theadData } from "../../util/theadHeadData";
import { formatter } from "../../util/investment";
export default function Grid({ tBodyData }) {
    return (
        <table id='result'>
            <thead>
                <tr>
                    {theadData.map((th) => <th key={th}>{th}</th>)}
                </tr>
            </thead>
            <tbody>
                {tBodyData.map((td) =>
                    <tr key={td.year}>
                        <td>{td.year}</td>
                        <td>{formatter.format(Math.round(td.valueEndOfYear))}</td>
                        <td>{formatter.format(Math.round(td.interest))}</td>
                        <td>{formatter.format(Math.round(td.totalInterest))}</td>
                        <td>{formatter.format(Math.round(td.totalInvestment))}</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}