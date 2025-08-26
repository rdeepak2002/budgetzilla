import { useState, useCallback } from 'react';
import { PlaidLinkOnSuccess } from 'plaid';

interface PlaidLinkProps {
  onSuccess: (publicToken: string, metadata: any) => void;
  onExit?: () => void;
}

export default function PlaidLink({ onSuccess, onExit }: PlaidLinkProps) {
  const [loading, setLoading] = useState(false);

  const handleClick = useCallback(async () => {
    setLoading(true);
    
    try {
      // In a real implementation, you would fetch a link_token from your server
      // For demo purposes, we're simulating a successful connection
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setLoading(false);
      
      // Simulate successful connection
      onSuccess('simulated_public_token', {
        institution: {
          name: 'Chase Bank',
          institution_id: 'ins_1'
        },
        accounts: [
          {
            id: 'acc_1',
            name: 'Checking Account',
            mask: '1234',
            type: 'depository',
            subtype: 'checking'
          }
        ]
      });
      
    } catch (error) {
      setLoading(false);
      console.error('Error in Plaid Link:', error);
      if (onExit) onExit();
    }
  }, [onSuccess, onExit]);

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-md shadow-md transition-colors duration-200 flex items-center justify-center"
    >
      {loading ? (
        <span className="inline-block animate-spin mr-2">⟳</span>
      ) : (
        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h9zm-9-2h10V8H12v8z" />
        </svg>
      )}
      {loading ? 'Connecting...' : 'Connect Bank Account'}
    </button>
  );
}