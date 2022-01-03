interface FileServed {
  /**
   * interface of file(s) to be served to components
   * @param lastModified - 1st flag for detecting the path still exits or not.
   * @param name - name of the file
   * @param path - path of the file
   * @param size - size of the file
   * @param type - type of the file
   *
   */
  lastModified?: number;
  name: string;
  path: string;
  size: number;
  type: string;
}
