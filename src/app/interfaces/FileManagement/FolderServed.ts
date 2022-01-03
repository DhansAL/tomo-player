interface FolderServed {
  /**
   * interface of the folder to be served to components
   * @param lastModified - 1st flag for detecting the path still exits or not.
   * @param name - name of the folder
   * @param path - path of the folder
   * @param size - size of the folder
   *
   */
  lastModified?: number;
  name: string;
  path: string;
  size: number;
}
