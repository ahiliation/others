#include <stdio.h>
#include <time.h>
 
int add(int a, int b) {
    return a + b;
}
int subtract(int a, int b) {
    return a - b;
}
 
int print(char *msg) {
    return printf("print: %s\n", msg);
}
int time_print(char *msg) {
    time_t now_time = time(NULL);
    struct tm *now_tm = localtime(&now_time);
    return printf("%s: %s",msg, asctime(now_tm));
}
 
void hello_world(void) {
    printf("Hello, World!\n");
}
void a_name(void) {
    printf("Hello, somebody!\n");
}
 
struct some_pointers {
    int (*p1)(int, int);
    int (*p2)(char *);
    void (*p3)(void);
};
 
struct some_pointers sp = {
    .p1 = add,
    .p2 = print,
    .p3 = hello_world
};
 
void call_all(struct some_pointers *p) {
    printf("p->p1(1,2) -> %d\n", p->p1(1,2));
    p->p2("It's something!");
    p->p3();
}
 
int main(void) {
    puts("\n1. call_all()");
    call_all(&sp);
    sp.p1 = subtract;
    sp.p2 = time_print;
    sp.p3 = a_name;
    puts("\n2. call_all()");
    call_all(&sp);
    return 0;
}
