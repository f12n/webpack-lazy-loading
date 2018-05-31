/**
 * Assuming the page-chunk is smaller and finishes faster, 
 * the page will be displayed with a LoadingIndicator, 
 * until the already requested charting-library-chunk finishes. 
 * 
 * This will give a little load time boost since it only needs 
 * one round-trip instead of two. Especially in high-latency environments.
 */
import(/* webpackPreload: true */ './ChartingLibrary');