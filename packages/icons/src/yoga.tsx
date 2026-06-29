import { mdiYoga } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Yoga(props: IconComponentProps) {
  return <Icon path={mdiYoga} {...props} />;
}

export { mdiYoga as path };
