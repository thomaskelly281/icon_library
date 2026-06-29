import { mdiBitbucket } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Bitbucket(props: IconComponentProps) {
  return <Icon path={mdiBitbucket} {...props} />;
}

export { mdiBitbucket as path };
