import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { JobListing } from "./JobListing";
import { JobSeeker } from "./JobSeeker";

@Entity("jobSeekerJobListing")
class JobSeekerJobListing {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => JobSeeker)
  @JoinColumn({ name: "jobSeekerId" })
  jobSeeker: JobSeeker;

  @ManyToOne(() => JobSeeker)
  @JoinColumn({ name: "jobListingId" })
  jobListing: JobListing;
}

export { JobSeekerJobListing };
