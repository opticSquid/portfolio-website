function WorkCompany({
  companyName,
  startTime,
  endTime,
  jobRole,
  jobDescription,
}: {
  companyName: string;
  startTime: string;
  endTime: string;
  jobRole: string;
  jobDescription: string;
}) {
  return (
    <div className="relative pl-8 sm:pl-32 py-6 group">
      {/* <!-- Purple label --> */}
      <div className="font-caveat font-medium text-2xl text-primary mb-1 sm:mb-0">
        {companyName}
      </div>
      {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
      <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-secondary sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-3 after:h-3 after:bg-primary after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
        <>
          <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold w-20 h-6 sm:mb-0 text-primary bg-primary-foreground rounded-full">
            {endTime}
          </time>
          <time className="sm:absolute left-0 translate-y-9 inline-flex items-center justify-center text-xs font-semibold w-20 h-6 sm:mb-0 border text-slate-400 border-primary-foreground bg-card rounded-full">
            {startTime}
          </time>
        </>
        <div className="text-xl font-bold text-slate-300">{jobRole}</div>
      </div>
      {/* <!-- Content --> */}
      <div className="text-slate-500">{jobDescription}</div>
    </div>
  );
}

export default WorkCompany;
