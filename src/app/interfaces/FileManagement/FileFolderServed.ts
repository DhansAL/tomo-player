/**
 * interface of the file(s) to be served to components
 * @param lastModified - 1st flag for detecting the path still exits or not.
 * @param name - name
 * @param path - path
 * @param size - size
 * @param type - type for files only
 * @param subfilePath - path of the subfile in case of file
 *
 */

export interface FileFolderServed {
  lastModified: number;
  name: string;
  path: string;
  size: number;
  type?: string;
  subfilePath?: string;
}
