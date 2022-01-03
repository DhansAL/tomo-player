/**
 * interface of the folder to be served to components
 * @param lastModified - 1st flag for detecting the path still exits or not.
 * @param name - name of the folder|file
 * @param path - path of the folder|file
 * @param size - size of the folder|file
 * @param type - type of the file(only)
 *
 */

interface FolderServed {
  lastModified?: number;
  name: string;
  path: string;
  size: number;
  type?: string;
}
