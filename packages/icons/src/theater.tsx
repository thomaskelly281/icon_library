import { mdiTheater } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Theater(props: IconComponentProps) {
  return <Icon path={mdiTheater} {...props} />;
}

export { mdiTheater as path };
