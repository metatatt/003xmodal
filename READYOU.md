# Modifications

1) components/ui/chat/chat.interface.ts:

    handleInputChange: (e: any) => void;

2) components/ui/input.txs

    (HTMLInput -> HTMLSelect)

    extends React.InputHTMLAttributes<HTMLSelectElement> {}
    
    const Input = React.forwardRef<HTMLSelectElement, InputProps>

template of the input.tsx

    return (
       <select
        className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className,
        )}

        ref={ref}
        {...props}
        >

      <option value={""} disabled>
              --What to Check?--
      </option>
      <option value={p1}>1. check desk (Line Clearance)</option>
      <option value={p2}>2. check parts labels (UDI and Expiration)</option>
      <option value={p3}>3. check work (Common Defects)<ption>
      <option value={p4}>4. check WO (Document Comliance)</option
       </select>);

4) page layout

        
        chat-section.tsx
        <div className="space-y-4 max-w-full w-full">


# deployment 
    for iPAD (Safari): Railway.APP > Vercel