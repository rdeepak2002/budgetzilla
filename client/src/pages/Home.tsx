import { useState } from 'react';
import PlaidLink from '../components/PlaidLink';
import Sidebar from '../components/Sidebar';
import { monthlyMetrics, monthlySalesData, statisticsData, recentOrders } from '../data/mockData';

export default function Home() {
	const [connectedAccount, setConnectedAccount] = useState<any>(null);

	const handlePlaidSuccess = (publicToken: string, metadata: any) => {
		console.log('Plaid connection successful', publicToken, metadata);
		setConnectedAccount(metadata.accounts[0]);
	};

	return (
		<div className="flex min-h-screen bg-gray-50">
			<Sidebar />
			<div className="flex-1">
				<div className="container mx-auto px-4 py-6">
					{/* Header */}
					<div className="flex justify-between items-center mb-6">
						<h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
						{!connectedAccount ? (
							<PlaidLink onSuccess={handlePlaidSuccess} />
						) : (
							<div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
								<div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
								<span className="text-sm font-medium">Connected: Chase Bank (••••{connectedAccount.mask})</span>
							</div>
						)}
					</div>

					{/* Key Metrics */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
						{/* Customers Card */}
						<div className="bg-white rounded-lg shadow-md p-6">
							<div className="flex justify-between items-center mb-4">
								<h2 className="text-gray-500 font-medium">Customers</h2>
								<div className="flex items-center text-green-500 text-sm">
									<span>+{monthlyMetrics.customers.growth}%</span>
									<svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
									</svg>
								</div>
							</div>
							<div className="text-3xl font-bold text-gray-800">{monthlyMetrics.customers.count.toLocaleString()}</div>
						</div>

						{/* Transactions Card */}
						<div className="bg-white rounded-lg shadow-md p-6">
							<div className="flex justify-between items-center mb-4">
								<h2 className="text-gray-500 font-medium">Transactions</h2>
								<div className="flex items-center text-green-500 text-sm">
									<span>+{monthlyMetrics.transactions.growth}%</span>
									<svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
									</svg>
								</div>
							</div>
							<div className="text-3xl font-bold text-gray-800">{monthlyMetrics.transactions.count.toLocaleString()}</div>
						</div>

						{/* Target Completion Card */}
						<div className="bg-white rounded-lg shadow-md p-6">
							<div className="flex justify-between items-center mb-2">
								<h2 className="text-gray-500 font-medium">Monthly Target</h2>
								<span className="text-xs text-gray-400">Target completion for each month</span>
							</div>
							<div className="flex items-center justify-between mb-2">
								<div className="text-3xl font-bold text-indigo-600">{monthlyMetrics.targetCompletion.percentage}%</div>
								<div className="text-sm text-gray-500">
									<span className="font-medium">${monthlyMetrics.targetCompletion.current.toLocaleString()}</span> of ${monthlyMetrics.targetCompletion.target.toLocaleString()}
								</div>
							</div>
							<div className="w-full bg-gray-200 rounded-full h-2.5">
								<div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: `${monthlyMetrics.targetCompletion.percentage}%` }}></div>
							</div>
						</div>
					</div>

					{/* Charts Section */}
					<div className="grid grid-cols-1 lg:grid-cols-1 gap-6 mb-6">

						{/* Statistics Area Chart */}
						<div className="bg-white rounded-lg shadow-md p-6">
							<div className="flex justify-between items-center mb-4">
								<h2 className="text-lg font-medium text-gray-800">Statistics</h2>
								<div className="flex space-x-2">
									<div className="flex items-center">
										<div className="w-3 h-3 bg-indigo-500 rounded-full mr-1"></div>
										<span className="text-xs text-gray-500">Revenue</span>
									</div>
									<div className="flex items-center">
										<div className="w-3 h-3 bg-blue-300 rounded-full mr-1"></div>
										<span className="text-xs text-gray-500">Expenses</span>
									</div>
									<div className="flex items-center">
										<div className="w-3 h-3 bg-green-300 rounded-full mr-1"></div>
										<span className="text-xs text-gray-500">Profit</span>
									</div>
								</div>
							</div>
							<div className="h-64 relative">
								{/* This is a simplified representation of an area chart */}
								<div className="absolute inset-0 flex items-end">
									<svg className="w-full h-full" viewBox="0 0 1200 300" preserveAspectRatio="none">
										{/* Revenue Area */}
										<path
											d="M0,100 L100,80 L200,90 L300,95 L400,105 L500,110 L600,100 L700,90 L800,85 L900,75 L1000,80 L1100,70 L1200,60 L1200,300 L0,300 Z"
											fill="rgba(79, 70, 229, 0.1)"
											stroke="#4f46e5"
											strokeWidth="2"
										/>
										{/* Expenses Area */}
										<path
											d="M0,150 L100,140 L200,145 L300,135 L400,150 L500,140 L600,130 L700,120 L800,125 L900,115 L1000,120 L1100,110 L1200,100 L1200,300 L0,300 Z"
											fill="rgba(147, 197, 253, 0.1)"
											stroke="#93c5fd"
											strokeWidth="2"
										/>
										{/* Profit Area */}
										<path
											d="M0,200 L100,190 L200,195 L300,205 L400,195 L500,200 L600,210 L700,205 L800,195 L900,205 L1000,195 L1100,200 L1200,190 L1200,300 L0,300 Z"
											fill="rgba(134, 239, 172, 0.1)"
											stroke="#86efac"
											strokeWidth="2"
										/>
									</svg>
								</div>
								<div className="absolute bottom-0 w-full flex justify-between text-xs text-gray-400">
									{statisticsData.months.map((month, index) => (
										<div key={index}>{month}</div>
									))}
								</div>
							</div>
						</div>
					</div>

					{/* Recent Orders */}
					<div className="bg-white rounded-lg shadow-md p-6">
						<div className="flex justify-between items-center mb-4">
							<h2 className="text-lg font-medium text-gray-800">Recent Orders</h2>
							<button className="text-sm text-indigo-600 hover:text-indigo-800">View All</button>
						</div>
						<div className="overflow-x-auto">
							<table className="min-w-full divide-y divide-gray-200">
								<thead>
									<tr>
										<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
										<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
										<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
										<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
									</tr>
								</thead>
								<tbody className="bg-white divide-y divide-gray-200">
									{recentOrders.map((order) => (
										<tr key={order.id}>
											<td className="px-6 py-4 whitespace-nowrap">
												<div className="flex items-center">
													<div className="ml-4">
														<div className="text-sm font-medium text-gray-900">{order.product}</div>
													</div>
												</div>
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												<div className="text-sm text-gray-500">{order.category}</div>
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												<div className="text-sm text-gray-900">${order.price.toFixed(2)}</div>
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												<span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                          ${order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
														order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
															'bg-blue-100 text-blue-800'}`}>
													{order.status}
												</span>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}