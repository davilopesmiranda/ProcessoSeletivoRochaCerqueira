import requests

def buscar_usuarios():
    return requests.get(
        "https://jsonplaceholder.typicode.com/users"
    ).json()

def buscar_tarefas():
    return requests.get(
        "https://jsonplaceholder.typicode.com/todos"
    ).json()

usuarios = buscar_usuarios()
tarefas = buscar_tarefas()

print("-----------------------------------------------------------------------------------")
print("Relatório de Tarefas por Usuário")
print("-----------------------------------------------------------------------------------")

for usuario in usuarios:

    concluidas = 0
    pendentes = 0

    for tarefa in tarefas:

        if tarefa["userId"] == usuario["id"]:

            if tarefa["completed"]:
                concluidas += 1
            else:
                pendentes += 1

    print()
    print(
        f"{usuario['name']} -> "
        f"Concluídas: {concluidas} | "
        f"Pendentes: {pendentes}"
    )
    totalAtividades = concluidas + pendentes
    print(
        f"{usuario['name']} possui {totalAtividades} tarefas"
    )
    
print("-----------------------------------------------------------------------------------")
print("Análise de Pendências por Usuário Concluída")
print()

maior_pendente = 0
usuarios_com_mais_pendencias = []

for usuario in usuarios:
    pendentes = 0

    for tarefa in tarefas:
        if tarefa["userId"] == usuario["id"] and not tarefa["completed"]:
            pendentes += 1

    if pendentes > maior_pendente:
        maior_pendente = pendentes
        usuarios_com_mais_pendencias = [usuario["name"]]

    elif pendentes == maior_pendente:
        usuarios_com_mais_pendencias.append(usuario["name"])

if len(usuarios_com_mais_pendencias) == 1:
    print(
        f"O usuário com mais atividades pendentes é {usuarios_com_mais_pendencias[0]}."
    )
else:
    print(
        f"Os usuários com mais atividades pendentes são "
        f"{', '.join(usuarios_com_mais_pendencias[:-1])} "
        f"e {usuarios_com_mais_pendencias[-1]}."
    )

print(
    f"Com um total de {maior_pendente} pendências"
)
print("-----------------------------------------------------------------------------------")


