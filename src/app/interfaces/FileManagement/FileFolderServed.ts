/**
 * interface of the file(s) to be served to components
 * // @description - folder dont need global contexts as it is based on local storage.
 * @param lastModified - 1st flag for detecting the path still exits or not.
 * @param name - name
 * @param path - path
 * @param size - size
 * @param type - type for files only
 * @param subfilePath - path of the subfile
 * @param lastWatch - true if played from continue watching
 *
 *
 */

export interface FileFolderServed {
  lastModified: number;
  name: string;
  path: string;
  size: number;
  type?: string;
  subfilePath?: string;
  lastWatch: boolean;
}
