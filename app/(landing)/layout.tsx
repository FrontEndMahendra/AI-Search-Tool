const LandingLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <main className="h-full bg-[#2c0a3e] overflow-auto">
            <div className="mx-auto max-w-screen-xl h-full w-full">
                {children}
            </div>
        </main>
    );
}

export default LandingLayout;