import { theadData } from "../../util/theadHeadData";
export default function Grid({ tBodyData }) {
    return (
        <table id='result'>
            <thead>
                <tr>
                    {theadData.map((th) => <th>{th}</th>)}
                </tr>
            </thead>
            <tbody>
                {tBodyData.map((td) =>
                    <tr>
                        <td>{td.year}</td>
                        <td>{td.valueEndOfYear}</td>
                        <td>{td.interest}</td>
                        <td>{td.totalInterest}</td>
                        <td>{td.totalInvestment}</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}