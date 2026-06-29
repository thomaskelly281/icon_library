import { mdiBook } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Book(props: IconComponentProps) {
  return <Icon path={mdiBook} {...props} />;
}

export { mdiBook as path };
