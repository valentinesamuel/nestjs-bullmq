import { Process, Processor } from '@nestjs/bull';
import { TRANSCODE_QUEUE } from './constants';
import { Job } from 'bull';
import { Logger } from '@nestjs/common';

@Processor(TRANSCODE_QUEUE)
export class TranscodeConsumer {
  private readonly logger = new Logger(TranscodeConsumer.name);

  @Process()
  async transcodeJob(job: Job<unknown>) {
    this.logger.warn(`Start transcoding...Transcoding message: ${job.id}`);
    this.logger.debug('Start transcoding...');
    this.logger.debug(job);

    await new Promise<void>((resolve) => setTimeout(resolve, 5000));
    this.logger.warn(`Transcoding completed for: ${job.id}`);
  }
}
