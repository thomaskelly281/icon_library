import { mdiBucket } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Bucket(props: IconComponentProps) {
  return <Icon path={mdiBucket} {...props} />;
}

export { mdiBucket as path };
